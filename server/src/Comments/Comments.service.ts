import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/Prisma.service';
import { Comment } from '@prisma/client';
import type { PostCommentDTO, PostCommentFiles } from './Comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async postComment(
    dto: PostCommentDTO, 
    files: PostCommentFiles
  ): Promise<Omit<Comment, 'text' | 'parentId'>> {

    const { userId, text } = dto
    const { imgs, txts } = files

    const comment = await this.prismaService.comment.create({
      data: {
        userId,
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
      },

      omit: {
        text: true
      }
    })

    return comment
  }

  async getMainComments() {
    const comments = await this.prismaService.comment.findMany({
      where: {
        parentId: null
      },
      
      orderBy: {
        date: 'desc'
      },

      take: 25,

      include: {
        user: true,
        imgs: true,
        txts: true,
        replies: {
          include: {
            imgs: true,
            txts: true,
            user: true

          },
          orderBy: {
            date: 'asc'
          }
        },
      },
    })

    return comments
  }

  async getReplies(parentId: number) {
    const replies = await this.prismaService.comment.findMany({
      where: {
        parentId
      },

      include: {
        user: true
      }
    })

    return replies
  }
}
