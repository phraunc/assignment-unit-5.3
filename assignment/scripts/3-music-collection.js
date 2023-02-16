console.log('***** Music Collection *****');

let collection = [];

function addToCollection(title, artist, yearPublished) {
    console.log('In addToCollection function', title, artist, yearPublished);

    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return console.log('This is my Collection',album);

}// end fucntion 'addToCollection'.
addToCollection('Whats My Name Again', 'Blink-182', 1999);
addToCollection('All The Small Things', 'Blink-182', 1998);
addToCollection('Dammit', 'Blink-182', 1997);
addToCollection('Let Her Cry', 'Hootie and the Blowfish', 1994);
addToCollection('Only Want to be with You', 'Hootie and the Blowfish', 1994);
addToCollection('Piano Man', 'Billy Joel', 1973);