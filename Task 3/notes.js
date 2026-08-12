const fs = require("fs")
const chalk = require("chalk")

const addNote = (title, body) => {
    // Load existing notes so that it is not overwritten/deleted
    const notes = loadNotes()
    // find method - stop loop when first suplicate title is found
    const duplicateNote = notes.find((note) => note.title === title)

    // Save note is there is no duplicate note
    if (!duplicateNote){
        notes.push({
        title: title,
        body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title is already taken."))
    }
}  

const removeNote = (title) => {
    const notes = loadNotes() //Get array of existing notes
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep) 
    } else {
        console.log(chalk.red.inverse("No Note found!"))
    }
}

const listNotes = () => {
    console.log(chalk.blue.bold("Your notes:"))
    const notes = loadNotes()
    
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteFound = notes.find((note) => note.title === title)
    if (noteFound){
        console.log(chalk.magenta.bold.underline(noteFound.title))
        console.log(noteFound.body)
    } else {
        console.log(chalk.red.inverse("No Note found!"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    // Load notes only if notes.json exists
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}