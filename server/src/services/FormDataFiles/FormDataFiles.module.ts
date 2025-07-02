import { Module } from '@nestjs/common';
import { FormDataFilesService } from './FormDataFiles.service';
import { S3Module } from '../S3/S3.module';

@Module({
	imports: [S3Module],
	providers: [FormDataFilesService],
	exports: [FormDataFilesService]
})
export class FormDataFilesModule {}