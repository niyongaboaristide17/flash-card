import { PrismaClient } from "@prisma/client";
import { Flashcard, FlashcardInput } from '../models/Flashcard';

const prisma = new PrismaClient()

export const createFlashcard = async (flashcard: FlashcardInput): Promise<Flashcard> => {
	
	return await prisma.flashcard.create({
		data: flashcard
	})
}

export const findAllFlashcards = async (): Promise<Flashcard[]> => {
	return await prisma.flashcard.findMany(
		{
			include: {
				user: true,
			},
		}
	)
}


export const findAllFlashcardsByUser = async (userId: number): Promise<Flashcard[]> => {
	return await prisma.flashcard.findMany(
		{
			where: {
				userId: userId,
			},
			include: {
				user: true,
			},
		}
	)
}