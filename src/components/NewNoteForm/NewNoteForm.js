import { useState } from 'react'

export default function NewNoteForm() {
    const [note, setNote] = useState('')

    function handleChange(event) {
        setNote(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        
    }
    
    return (
        <form>
            <label for="input">New Note</label>
            <input type="text" name='note' onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Create Note</button>
        </form>
    )
}