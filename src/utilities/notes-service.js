import * as notesAPI from './notes-api'

export async function createNote(data) {
    await notesAPI.createNote(data)
}