import { gql } from "apollo-server";

export const authTypeDefs = gql`

	input Credential {
		email: String!
		password: String!
	}

	type Token {
		accessToken: String! 
	}

`