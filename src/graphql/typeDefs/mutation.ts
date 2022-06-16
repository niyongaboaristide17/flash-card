import { gql } from 'apollo-server';
export const mutationTypeDefs = gql`

	type Mutation {
		createUser(input: CreateUserInput!): User
		createFlashcard(input: CreateFlashcardInput!): Flashcard
		login(input: Credential!): Token
  	}

`