import { join } from 'path'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'
import { PrismaModule } from './prisma/Prisma.module'
import { AuthModule } from './Auth/Auth.module'
import { CommentsModule } from './Comments/Comments.module';
import { RepliesModule } from './Replies/Replies.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		GraphQLModule.forRoot({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			sortSchema: true,
		}),
		PrismaModule,
		AuthModule,
		CommentsModule,
		RepliesModule,
	],
})
export class AppModule {}
