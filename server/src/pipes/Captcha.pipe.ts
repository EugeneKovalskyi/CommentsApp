import { Injectable, PipeTransform, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AuthInput } from 'src/Auth/inputs/Auth.input'
import fetch from 'node-fetch'

@Injectable()
export class CaptchaPipe implements PipeTransform {
	constructor(private readonly configService: ConfigService) {}

	async transform(value: AuthInput) {
		const secret = this.configService.getOrThrow<string>('RECAPTCHA_SECRET_KEY')
		const url = this.configService.getOrThrow<string>('RECAPTCHA_URL')
		const response = await fetch(`${url}?secret=${secret}&response=${value.tocken}`)
		const { success } = await response.json() as { success: true }

		if (success)
			return value
		else
			throw new UnauthorizedException('reCaptcha failed!')
	}
}