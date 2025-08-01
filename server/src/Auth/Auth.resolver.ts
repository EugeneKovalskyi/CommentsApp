import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AuthService } from './Auth.service'
import { AuthInput } from './inputs/Auth.input'
import { Auth } from './models/Auth'
import { UsePipes } from '@nestjs/common'
import { ReCaptchaPipe } from 'src/pipes/ReCaptcha.pipe'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Query(() => String)
  root() {
    return 'ROOT'
  }

	@Mutation(() => Auth, {description: 'Return user id and register user if not exists.'})
	@UsePipes(ReCaptchaPipe)
	auth(@Args('user') input: AuthInput) {
		return this.authService.auth(input)
	}
}
