import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/Prisma.service';
import { Comment } from '@prisma/client';
import type { PostCommentDTO, PostCommentFiles } from './Comment.dto';
import type { QueryParams } from 'src/types/app.types';

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

  async getMainComments(queryParams: QueryParams) {
    const { orderBy, lastId } = queryParams
    const count = await this.getMainCommentsCount()
    const comments = await this.prismaService.comment.findMany({
      where: {
        parentId: null,
      },
      orderBy,

      skip: lastId ? 1 : 0,
      cursor: lastId ? { id: lastId } : undefined,
      take: 25,

      include: {
        user: true,
        imgs: true,
        txts: true,
      }
    })

    return { comments, count }
  }

  async getMainCommentsCount() {
    const count = await this.prismaService.comment.count({
      where: {
        parentId: null
      }
    })

    return count
  }

  async getReplies(parentId: number) {
    const replies = await this.prismaService.comment.findMany({
      where: {
        parentId
      },

      include: {
        user: true,
        imgs: true, 
        txts: true
      }
    })

    return replies
  }
}
