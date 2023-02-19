console.log('***** Music Collection *****');

let collection = [];

//FUNCTION addToCollection //
function addToCollection(title, artist, yearPublished) {
    console.log('In addToCollection function', title, artist, yearPublished);

    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return console.log('This is my Collection', album);

}// end fucntion 'addToCollection'.
addToCollection('Whats My Name Again', 'Blink-182', 1999);
addToCollection('All The Small Things', 'Blink-182', 1998);
addToCollection('Dammit', 'Blink-182', 1997);
addToCollection('Let Her Cry', 'Hootie and the Blowfish', 1994);
addToCollection('Only Want to be with You', 'Hootie and the Blowfish', 1994);
addToCollection('Piano Man', 'Billy Joel', 1973);

console.log(collection); // console.log the album's in the array

// FUNCTION showCollection//
function showCollection(array) {
    console.log('In showCollection function', array); // To show what function I am in.
    console.log('This is how many items are in the array', array.length); // To show how many items are in the array.

    for (let i = 0; i < array.length; i++) { // created a for loop to this array/function.
        console.log('TITLE:', array[i].title, 'By ARTIST:', array[i].artist, 'PUBLISHED:', array[i].yearPublished);

    }
    return console.log('Great songs!');

} // end showCollection function

console.log(showCollection(collection));

//FUNCTION findByArtist// 
function findByArtist(artist) {
    console.log('In the findByArtist function', artist);// letting me know what function i am in.

    let artistArray = []; // variable as an empty array

    for (let i = 0; i < collection.length; i++)// for/else  loop

        if (artist === collection[i].artist) {
            artistArray.push(collection[i]);
            console.log('Results', artistArray);
        }
        else {
             artistArray = [];
        }
    return artistArray;
}
// console.logging all artits in collection and without.
console.log(findByArtist('Blink-182'));
console.log(findByArtist('Hootie and the Blowfish'));
console.log(findByArtist('Billy Joel'));
console.log(findByArtist('Disturbed'));

// STRETCH GOALS//

