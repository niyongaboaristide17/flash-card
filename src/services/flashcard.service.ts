import { PrismaClient } from "@prisma/client";
import { Flashcard, FlashcardInput } from '../models/Flashcard';

const prisma = new PrismaClient()

export const createFlashcard = async (flashcard: FlashcardInput): Promise<Flashcard> => {

	return await prisma.flashcard.create({
		data: flashcard,
		include: {
			user: true
		}
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

export const findOneFlashcardById = async (id: number): Promise<Flashcard | undefined | null> => {
	return await prisma.flashcard.findUnique(
		{
			where: { id: id },
			include: {
				user: true
			}
		}
	)
}

export const markFlashcardAsDone = async (id: number): Promise<Flashcard | undefined | null> => {
	return await prisma.flashcard.update(
		{
			where: { id: id },
			data: {
				isDone: true,
			}
		}
	)
}

export const deleteFlashcard = async (id: number): Promise<Flashcard | undefined | null> => {
	return await prisma.flashcard.delete(
		{
			where: { id: id },
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