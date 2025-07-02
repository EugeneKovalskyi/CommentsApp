import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { PostReplyDTO } from './Reply.dto'
import { RepliesService } from './Replies.service'

@WebSocketGateway()
export class RepliesGateway implements OnGatewayConnection, OnGatewayDisconnect {
	constructor(private readonly repliesService: RepliesService) {}

	@WebSocketServer()
	server: Server

	handleConnection(client: Socket) {
		console.log('Connected: ', client.id)
	}

	handleDisconnect(client: Socket) {
		console.log('Disconnected: ', client.id)
	}

	@SubscribeMessage('post:reply')
	async postReply(
		@ConnectedSocket() client: Socket,
		@MessageBody() dto: PostReplyDTO
	) {
		const reply = await this.repliesService.postReply(dto)
		const room = String(reply.parentId)

		client.to(room).emit('get:reply', reply)

		return {
			id: reply.id,
			date: reply.date
		}
	}

	@SubscribeMessage('join')
	async joinRoom(
		@ConnectedSocket() client: Socket,
		@MessageBody() room: string) {
			await client.join(room)
			console.log(client.rooms)
	}

	@SubscribeMessage('leave')
	async leaveRoom(
		@ConnectedSocket() client: Socket,
		@MessageBody() room: string) {
			await client.leave(room)
			console.log(client.rooms)
	}
}