import _ from 'lodash';
import { findAllUsers } from '../../services/user.service';
import { findAllFlashcards, findAllFlashcardsByUser, findOneFlashcardById } from '../../services/flashcard.service';
import { User } from '../../models/User';
import { Flashcard } from '../../models/Flashcard';

export const Query = {
	// USER RESOLVERS
	users: async (parent: any, args: any, context: any): Promise<User[]> => {
	  return await findAllUsers()
	},

	// FLASHCARDS RESOLVERS
	flashcards: async (parent: any, args: any, context: any): Promise<Flashcard[]> =>{
		if (context.isLoggedIn === false) {
			throw new Error("UNAUTHORIZED REQUEST");
		}
		return await findAllFlashcards()
	},

	flashcard: async (parent: any, args: any, context: any): Promise<Flashcard | null | undefined> => {
		if (context.isLoggedIn === false) {
			throw new Error("UNAUTHENTICATED USER REQUEST");
		}
		const flashcard = await findOneFlashcardById(Number(args.input))
		if (flashcard === undefined || flashcard === null) {
			throw new Error("FLASHCARD NOT FOUND");
		}
		if (flashcard.userId !== context.user.id) {
			throw new Error("UNAUTHORIZED REQUEST");
		}
		return flashcard
	},

	userFlashcards: async (parent: any, args: any, context: any): Promise<Flashcard[]> => {
		if (context.isLoggedIn === false) {
			throw new Error("UNAUTHORIZED REQUEST");
		}
		const flashcards: Flashcard[] = await findAllFlashcardsByUser(Number(context.user.id))
		
		if (args.order) {
			return _.orderBy(flashcards,['title'], [args.order,]);
		}

		return flashcards 
	}
}
