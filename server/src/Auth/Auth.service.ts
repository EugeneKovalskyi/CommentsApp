import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/Prisma.service'
import { AuthInput } from './inputs/Auth.input'
import { Auth } from './models/Auth'

@Injectable()
export class AuthService {
	constructor(private readonly prismaService: PrismaService) {}

	async auth(input: AuthInput): Promise<Auth> {
		const { name, email, homePage } = input

		let userId = (
			await this.prismaService.user.findFirst({
				where: { name },
				select: { id: true },
			})
		)

		if (!userId)
			userId = (
				await this.prismaService.user.create({
					data: {
						name,
						email,
						homePage
					},
					
					select: { 
						id: true 
					}
				})
			)

		return userId
	}
}
