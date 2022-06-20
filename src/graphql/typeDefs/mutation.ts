import { gql } from 'apollo-server';
export const mutationTypeDefs = gql`

	type Mutation {
		createUser(input: CreateUserInput!): CreatedUser
		createFlashcard(input: CreateFlashcardInput!): CreatedFlashcard
		markFlashcardAsDone(input: ID!): CreatedFlashcard
		deleteFlashcard(input: ID!): CreatedFlashcard
		updateFlashcard(id: ID!, input: UpdateFlashcardInput!): CreatedFlashcard
		login(input: Credential!): Token
  	}

`