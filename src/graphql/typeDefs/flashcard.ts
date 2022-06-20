import { gql } from 'apollo-server';

export const flashcardTypeDefs = gql`

	type Flashcard {
		id: ID!
		title: String!
		description: String!
		user: User!
		isDone: Boolean
		userId: Int!
	}

	type CreatedFlashcard {
		id: ID!
		title: String!
		description: String!
		isDone: Boolean
		userId: Int!
	}

	input CreateFlashcardInput {
		title: String!
		description: String!
  	}

`