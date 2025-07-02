import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { FormDataFilesService } from 'src/services/FormDataFiles/FormDataFiles.service';
import type { PostCommentDTO } from 'src/Comments/Comment.dto';

@Injectable()
export class ParseFormDataPipe implements PipeTransform {
	constructor(private readonly formDatafilesService: FormDataFilesService) {}

	transform(value: any, metadata: ArgumentMetadata) {
		if (metadata.type === 'body')
			return value as PostCommentDTO
		if (metadata.type === 'custom')
			return this.formDatafilesService.parse(value as Express.Multer.File[])
	}
}
