const Note = require('../../models/note')

async function create(req, res, next) {
        console.log(req.body)
        try {
            const note = req.body.note
            note.user = req.user._id
            await Note.create(req.body.note)
                .then((note) => {
                    res.status(201).json({ note: note })
                })
            
        } catch (error) {
            res.status(400).json(error)
        } 
        
            // .then(note => {
            //     res.status(201).json({ note: note })
            //     console.log(note)
            // })
}

module.exports = {
    create
}