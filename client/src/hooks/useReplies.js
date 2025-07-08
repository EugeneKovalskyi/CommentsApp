import { WS_HOST } from '#constants'
import { useMemo } from 'react'
import { io } from "socket.io-client"

export default (parentId, updateReplies) => {
	const socket = useMemo(() => io(WS_HOST, { 
		autoConnect: false, 
		transports: ['websocket'] 
	}), [])

	const initReplies = () => {
		socket.on('connect', () => {
			socket.on(`get:reply:${parentId}`, (reply) => {
				updateReplies(draft => { draft.push(reply) })
			})
		})
		socket.on('connect_error', () => {
			socket.off(`get:reply:${parentId}`)
			socket.disconnect()
		})
		socket.on('disconnect', () => {
			console.log('Switch green svg-icon to red.')
		})

		socket.connect()

		return () => {
			socket.off(`get:reply:${parentId}`)
			socket.disconnect()
		}
	}
	
	return {
		socket,
		initReplies
	}
}