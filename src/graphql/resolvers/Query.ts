import _ from 'lodash';
import { findAllUsers } from '../../services/user.service';
import { findAllFlashcards } from '../../services/flashcard.service';
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
	}
}
