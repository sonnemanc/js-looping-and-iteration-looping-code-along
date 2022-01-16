// Code your solutions in this file

const { createVirtualConsole } = require("jsdom")


function writeCards( names, event ) {
    let cards = []
    for ( let i = 0; i < names.length; i++ ) {
        cards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return cards
}

function countDown( n ) {
    while (n >= 0) {
        console.log(n--)
    }
}

