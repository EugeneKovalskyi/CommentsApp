import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthService } from './Auth.service'
import { AuthInput } from './inputs/Auth.input'
import { Auth } from './models/Auth'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Query(() => String)
  root() {
    return 'ROOT'
  }

	@Mutation(() => Auth, { 
		description: 'Return user id and register user if not exists.' 
	})
	auth(@Args('data') input: AuthInput) {
		return this.authService.auth(input)
	}
}
