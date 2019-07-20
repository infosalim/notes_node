const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0');

// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note!');
    }
});

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: () => {
        console.log('Removing a note!');
    }
});

// list command
yargs.command({
    command: 'list',
    describe: 'List of your note',
    handler: () => {
        console.log('Listing out all notes!');
    }
});

// read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log('Reading a note!');
    }
})

console.log(yargs.argv);