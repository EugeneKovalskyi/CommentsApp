import { 
  Body, 
  Controller, 
  Get, 
  Param, 
  Post, 
  Query, 
  UploadedFiles, 
  UseInterceptors, 
	UsePipes
} from '@nestjs/common'
import { CommentsService } from './Comments.service'
import { ParseFormDataPipe } from 'src/pipes/ParseFormData.pipe'
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { PostCommentFiles, PostCommentDTO } from './Comment.dto'
import { CommentsQueryPipe } from 'src/pipes/CommentsQuery.pipe'
import type { QueryParams } from 'src/types/app.types'

@Controller()
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) {}

	@Post()
	@UsePipes(ParseFormDataPipe)
	@UseInterceptors(AnyFilesInterceptor())
	postComment(@Body() dto: PostCommentDTO, @UploadedFiles() files: PostCommentFiles) {
		return this.commentsService.postComment(dto, files)
	}

	@Post('files')
	@UsePipes(ParseFormDataPipe)
	@UseInterceptors(AnyFilesInterceptor())
	getURLs(@UploadedFiles() files: PostCommentFiles) {
		return files
	}

	@Get()
	@UsePipes(CommentsQueryPipe)
	getMainComments(@Query() queryParams: QueryParams) {
		return this.commentsService.getMainComments(queryParams)
	}

	@Get(':parentId')
	getReplies(@Param('parentId') parentId: string) {
		return this.commentsService.getReplies(+parentId)
	}
}
