/* To Get input from users:
- Use process module in node
- Use document or window in browser 

Access input in node: console.log(process.argv)
argument vector (argv) - returns an array with all arguments provided. */

const chalk = require("chalk")
const yargs = require("yargs") // Argument vector parsing with yargs package
const getNotes = require("./notes.js")

// Create add command
yargs.command({
    command:'add',
    description: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    description: 'Remove a note',
    handler: function(){
        console.log("Removing a note")
    }
})

// Create list command
yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: function(){
        console.log("Listing all notes")
    }
})

// Create read command
yargs.command({
    command:'read',
    description: 'Read a note',
    handler: function(){
        console.log("Reading a note")
    }
})

yargs.parse()


