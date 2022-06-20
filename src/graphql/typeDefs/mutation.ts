import { gql } from 'apollo-server';
export const mutationTypeDefs = gql`

	type Mutation {
		createUser(input: CreateUserInput!): CreatedUser
		createFlashcard(input: CreateFlashcardInput!): CreatedFlashcard
		markFlashcardAsDone(input: ID!): CreatedFlashcard
		login(input: Credential!): Token
  	}

`