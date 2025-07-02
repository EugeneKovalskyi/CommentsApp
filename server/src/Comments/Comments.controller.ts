import { 
  Body, 
  Controller, 
  Get, 
  Param, 
  Post, 
  UploadedFiles, 
  UseInterceptors, 
	UsePipes
} from '@nestjs/common'
import { CommentsService } from './Comments.service'
import { ParseFormDataPipe } from 'src/pipes/ParseFormData.pipe'
import { AnyFilesInterceptor } from '@nestjs/platform-express'
import { PostCommentFiles, PostCommentDTO } from './Comment.dto'

@Controller()
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) {}

	@Post()
	@UsePipes(ParseFormDataPipe)
	@UseInterceptors(AnyFilesInterceptor())
	postComment(@Body() dto: PostCommentDTO, @UploadedFiles() files: PostCommentFiles) {
		console.log(dto, files)
		return this.commentsService.postComment(dto, files)
	}

	@Post('files')
	@UsePipes(ParseFormDataPipe)
	@UseInterceptors(AnyFilesInterceptor())
	getURLs(@UploadedFiles() files: PostCommentFiles) {
		return files
	}

	@Get()
	getMainComments() {
		return this.commentsService.getMainComments()
	}

	@Get(':parentId')
	getReplies(@Param('parentId') parentId: string) {
		return this.commentsService.getReplies(+parentId)
	}
}
