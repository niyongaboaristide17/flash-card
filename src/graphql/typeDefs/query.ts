import { gql } from 'apollo-server';
export const queryTypeDefs = gql`

	type Query {
		users: [User!]!
		flashcards: [Flashcard]!
		flashcard(input: ID!): Flashcard!
		userFlashcards(order: SortBy): [Flashcard]!
		
  	}

`