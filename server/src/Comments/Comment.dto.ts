import type { IFile } from 'src/types/app.types'
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class PostCommentDTO{
	@Type(() => Number)
	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	userId: number

	@IsString()
	@IsNotEmpty()
	text: string
}

export class PostCommentFiles {
	@IsArray()
	@IsOptional()
	imgs?: IFile[]

	@IsArray()
	@IsOptional()
	txts?: IFile[]
}

export class CommentsQuery {
	@IsString()
	@IsNotEmpty()
	criterion: string
	
	@IsString()
	@IsNotEmpty()
	order: string

	@IsNumber()
	@IsOptional()
	lastId?: number
}