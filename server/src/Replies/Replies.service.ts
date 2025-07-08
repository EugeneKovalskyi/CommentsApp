import { Injectable } from '@nestjs/common'
import { Comment } from '@prisma/client'
import { PrismaService } from 'src/Prisma/Prisma.service'
import type { PostReplyDTO } from './Reply.dto'

@Injectable()
export class RepliesService {
	constructor(private readonly prismaService: PrismaService) {}

	async postReply(dto: PostReplyDTO): Promise<Comment> {

		const { userId, parentId, text, imgs, txts } = dto
		const reply = await this.prismaService.comment.create({
			data: {
				userId,
				parentId,
				text,
				imgs: {
					createMany: {
						data: imgs ?? []
					}
				},
				txts: {
					createMany: {
						data: txts ?? []
					}
				}
			},

			include: {
				imgs: true,
				txts: true,
				user: true
			}
		})

		return reply
	}
}
