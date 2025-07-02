import { Module } from '@nestjs/common';
import { RepliesService } from './Replies.service';
import { RepliesGateway } from './Replies.gateway';

@Module({
  providers: [RepliesGateway, RepliesService],
})
export class RepliesModule {}
