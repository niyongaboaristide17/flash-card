import _ from 'lodash';
import { findAllUsers } from '../../services/user.service';
import { findAllFlashcards } from '../../services/flashcard.service';
import { User } from '../../models/User';
import { Flashcard } from '../../models/Flashcard';

export const Query = {
	// USER RESOLVERS
	users: async (): Promise<User[]> => {
	  return await findAllUsers()
	},

	// FLASHCARDS RESOLVERS
	flashcards: async (): Promise<Flashcard[]> =>{
		return await findAllFlashcards()
	}
}
