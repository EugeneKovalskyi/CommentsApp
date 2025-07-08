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
		client.broadcast.emit(`get:reply:${reply.parentId}`, reply)

		return {
			id: reply.id,
			date: reply.date
		}
	}
}