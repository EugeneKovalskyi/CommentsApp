import { Injectable, PipeTransform } from '@nestjs/common';
import { CommentsQuery } from 'src/Comments/Comment.dto';

@Injectable()
export class CommentsQueryPipe implements PipeTransform {
	transform(value: CommentsQuery) {
		if (value.criterion === 'date') 
			return {
				orderBy: {
					date: value.order
				},
				shown: Number(value.shown)
			}
			
		else if (value.criterion === 'name' || value.criterion === 'email')
			return {
				orderBy: {
					user: {
						[value.criterion]: value.order
					}
				},
				shown: Number(value.shown)
			}
	}
}