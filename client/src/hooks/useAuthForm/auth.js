import { GRAPHQL } from '#constants'

export default async (name, email, homePage) => {
	const response = await fetch(GRAPHQL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: 
				`mutation User {
					auth (data: {
						name: "${name}",
						email: "${email}",
						homePage: "${homePage}"
					}) {
						id
					}
				}`,
		}),
	})
	const id = +(await response.json()).data.auth.id
	
	return id
}
