import { User } from './User';

export type Flashcard = {
	id: number
	title : string
	description : string
	user?: User
	isDone : boolean
	userId : number
}

export type FlashcardInput = {
	title : string
	description : string
	userId: number
}

export type FlashcardUpdateInput = {
	title? : string
	description? : string
}