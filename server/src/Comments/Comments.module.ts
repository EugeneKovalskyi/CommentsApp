import { Module } from '@nestjs/common';
import { FormDataFilesModule } from 'src/services/FormDataFiles/FormDataFiles.module';
import { CommentsController } from './Comments.controller';
import { CommentsService } from './Comments.service';

@Module({
  imports: [FormDataFilesModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
