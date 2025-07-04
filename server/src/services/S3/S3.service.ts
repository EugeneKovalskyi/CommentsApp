import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class S3Service {
	private s3: S3Client

	constructor(private readonly configService: ConfigService) {
			this.s3 = new S3Client({
			region: this.configService.getOrThrow('AWS_S3_REGION'),
			credentials: {
				accessKeyId: this.configService.getOrThrow('AWS_ACCESS_KEY_ID'),
				secretAccessKey: this.configService.getOrThrow('AWS_SECRET_ACCESS_KEY'),
			},
		})
	}

	async upload(key: string, buffer: Buffer) {
		const bucket = this.configService.getOrThrow<string>('AWS_BUCKET_NAME')
		const region = this.configService.getOrThrow<string>('AWS_S3_REGION')

		await this.s3.send(
			new PutObjectCommand({
				Bucket: bucket,
				Key: key,
				Body: buffer,
			})
		)

		return `https://${bucket}.s3.${region}.amazonaws.com/${key}`
	}
}
