import { Injectable, UnsupportedMediaTypeException } from '@nestjs/common'
import { S3Service } from '../S3/S3.service'
import { ConfigService } from '@nestjs/config'
import type { PostCommentFiles } from 'src/Comments/Comment.dto'

@Injectable()
export class FormDataFilesService {
	constructor(
		private readonly configService: ConfigService,
		private readonly s3Service: S3Service
	) {}

	async parse(files: Express.Multer.File[]): Promise<PostCommentFiles> {
		const buffers: PostCommentFiles = {	imgs: [], txts: [] }

		for (const file of files) {
			const maxImgSize = this.configService.getOrThrow<number>('MAX_IMG_SIZE')
			const maxTxtSize = this.configService.getOrThrow<number>('MAX_TXT_SIZE')
			const field = file.fieldname as keyof PostCommentFiles
			const name = file.originalname.match(/.+?(?=\.\w+?$)/i)![0]
			const s3Key = crypto.randomUUID()

			if (field === 'imgs' && file.size > maxImgSize)
				throw new UnsupportedMediaTypeException('Image size larger than 10 MB.')
			if(field === 'txts' && file.size > maxTxtSize)
				throw new UnsupportedMediaTypeException('File size larger than 100 KB.')

			const url = await this.s3Service.upload(s3Key, file.buffer)
			buffers[field]!.push({ name, url })
		}

		return buffers
	}
}
