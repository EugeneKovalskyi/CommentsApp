import { Injectable, PipeTransform } from '@nestjs/common';
import { CommentsQuery } from 'src/Comments/Comment.dto';

@Injectable()
export class CommentsQueryPipe implements PipeTransform {
	transform({ criterion, order, lastId }: CommentsQuery) {
		if (criterion === 'date') 
			return {
				orderBy: {
					date: order
				},
				lastId: Number(lastId) || undefined
			}
			
		else if (criterion === 'name' || criterion === 'email')
			return {
				orderBy: {
					user: {
						[criterion]: order
					}
				},
				lastId: Number(lastId) || undefined
			}
	}
}