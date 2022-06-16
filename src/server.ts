import { ApolloServer } from 'apollo-server'
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';
import { isAuthenticated } from './middlewares/isAuthenticate';

const startApolloServer = (): void => {
	new ApolloServer({
		typeDefs,
		resolvers,
		csrfPrevention: true,
		context: ({req}:any)=>{
			const token: string = req.headers.authorization || ''
			return isAuthenticated(token)
		},
	},
	).listen().then(({ url }) => {
		console.log(`API running at ${url}`)
	});

}

export default startApolloServer