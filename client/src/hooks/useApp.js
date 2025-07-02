import { HOST, WS_HOST } from '#constants'

import { useImmer } from 'use-immer'
import { useMemo } from 'react'
import { io } from "socket.io-client"
import { localAuth } from '#utils'

export default () => {
	const [ comments, updateComments ] = useImmer([])
  const socket = useMemo(() => io(WS_HOST, { transports: ['websocket'] }), [])

	socket.on('connect', () => {
		console.log('Connected: ', socket.id)
	})
	socket.on('disconnect', () => {
		console.log('Disonnected: ', socket.id)
	})

	const initApp = () => {
		const getMainComments = async () => {
			const response = await fetch(HOST)
			const data = await response.json()

			console.log(data) //!!!

      for (const comment of data) {
        comment.coords = [comment.id]
        for(let i = 0; i < comment.replies.length; i++) {
          const reply = comment.replies[i]
          reply.coords = [comment.id, i]
        }
      }
			updateComments(() => data)
		}

		getMainComments()
    localAuth()
	}

	return {
		socket,
		comments,
		updateComments,
		initApp
	}
}