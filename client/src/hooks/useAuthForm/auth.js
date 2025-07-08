import { GRAPHQL } from '#constants'

export default async (name, email, token, homePage) => {
		const response = await fetch(GRAPHQL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: 
					`mutation {
						auth (user: {
							name: "${name}",
							email: "${email}",
							token: "${token}",
							homePage: "${homePage}"
						}) {
							id
						}
					}`,
			}),
		})
		const id = (await response.json()).data.auth.id

		return id
}
