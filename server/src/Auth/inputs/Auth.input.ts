import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength } from 'class-validator'

@InputType()
export class AuthInput {
	@Field({ description: 'User name' })
	@IsNotEmpty()
	@IsString()
	@MaxLength(128)
	name: string

	@Field({ description: 'User email' })
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	@Matches(/^[a-zA-Z][\w.]+?@\w+?\.\w+$/i)
	email: string

	@Field({ description: 'CAPTCHA-token' })
	@IsString()
	@IsNotEmpty()
	token: string

	@Field({ nullable: true, description: 'User home page' })
	@IsString()
	@IsOptional()
	homePage?: string
}
