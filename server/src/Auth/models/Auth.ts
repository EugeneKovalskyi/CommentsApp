import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Auth {
	@Field(() => ID, { description: 'User ID' })
	id: number
}