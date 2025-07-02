import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator'
import { IFile } from 'src/types/app.types'

export class PostReplyDTO {
	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	userId: number

	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	parentId: number

	@IsString()
	@IsNotEmpty()
	text: string

	@IsArray()
	@IsOptional()
	imgs?: IFile[]

	@IsArray()
	@IsOptional()
	txts?: IFile[]
}