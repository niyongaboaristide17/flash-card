import { gql } from 'apollo-server';
export const userTypeDefs = gql`

	type User {
		id: ID!
		name: String!
		email: String!
		flashcards: [Flashcard]
	}

	type CreatedUser {
		id: ID!
		name: String!
		email: String!
	}

	input CreateUserInput {
		name: String!
		email: String!
		password: String!
  	}

`