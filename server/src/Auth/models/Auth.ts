import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Auth {
	@Field(() => Number, { description: 'User id' })
	id: number
}