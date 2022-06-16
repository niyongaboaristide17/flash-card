import { ApolloServer } from 'apollo-server'
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';

const startApolloServer = () => {
	new ApolloServer({
		typeDefs,
		resolvers,
		csrfPrevention: true,
		context: ({req}:any)=>{
			const token: string = req.headers.authorization || ''
			return {token: token}
		},
	},
	).listen().then(({ url }) => {
		console.log(`API running at ${url}`)
	});

}

export default startApolloServer