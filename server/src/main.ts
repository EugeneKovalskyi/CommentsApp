import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './App.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: {
			origin: [
				'http://localhost:5173',
				'http://localhost:3001',
				'http://45.94.156.33',
				'http://45.94.156.33:80',
			],
		},
	})

	app.useGlobalPipes(new ValidationPipe({ transform: true }))

	await app.listen(4001)
}

bootstrap()
