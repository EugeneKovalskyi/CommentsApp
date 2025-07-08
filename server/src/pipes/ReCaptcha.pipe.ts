import { Injectable, PipeTransform, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AuthInput } from 'src/Auth/inputs/Auth.input'
import fetch from 'node-fetch'

@Injectable()
export class ReCaptchaPipe implements PipeTransform {
	constructor(private readonly configService: ConfigService) {}

	async transform(value: AuthInput) {
		const secret = this.configService.getOrThrow<string>('RECAPTCHA_SECRET_KEY')
		const url = this.configService.getOrThrow<string>('RECAPTCHA_URL')
		const response = await fetch(`${url}?secret=${secret}&response=${value.token}`)
		const { success } = await response.json() as { success: boolean }

		if (success)
			return value
		else
			throw new UnauthorizedException('reCAPTCHA failed!')
	}
}