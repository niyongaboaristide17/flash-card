import { Flashcard } from './Flashcard';

export type User = {
	id?: number
	name : string
	email : string
	password : string
	flashcards?: Flashcard[]
}