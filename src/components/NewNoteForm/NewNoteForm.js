import { useState } from 'react'
import { createNote } from '../../utilities/notes-service'

export default function NewNoteForm() {
    const [note, setNote] = useState({
        text: ''
    })

    function handleChange(event) {
        setNote({
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const formData = {...note}
            console.log(note)
            await createNote(formData)
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <form>
            <label>New Note</label>
            <input type="text" name='text' onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Create Note</button>
        </form>
    )
}