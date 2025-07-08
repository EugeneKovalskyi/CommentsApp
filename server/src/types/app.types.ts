export interface IFile {
	name: string
	url: string
}

type Order = 'desc' | 'asc'
interface IOrderByDate {
	date: Order
}
interface IOrderByUserName {
	user: {
		name: Order
	}
}
interface IOrderByUserEmail {
	user: {
		email: Order
	}
}
export interface QueryParams {
	orderBy: IOrderByDate | IOrderByUserName | IOrderByUserEmail
	lastId: number | undefined
}