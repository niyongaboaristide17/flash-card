import { gql } from 'apollo-server';

export const flashcardTypeDefs = gql`

	type Flashcard {
		id: ID!
		title: String!
		description: String!
		user: User!
		userId: Int!
	}

	input CreateFlashcardInput {
		title: String!
		description: String!
		userId: Int!
  	}

`