// A `ul` with the id `all-characters` that contains an `li`'s with an image (id=`photo-img`)
// of each character in the API (first page only), as well as the characters name.

const allCharacters = document.querySelector("all-characters");

const getAllCharacters = (res) => {
    const photoImg = document.querySelector("#photo-img");
    const characterName = document.querySelector("#character-name");
    res.results.forEach(char => {
        const li = document.createElement("li");
        li.textContent = 
    })
}



// A `main` tag that starts not on the page
// Inside of `main` should be two sections. The first section should have the id `character-info`
// the second should have the id `character-comments-section`.
// Inside of `character-info` should be be an `h3` an `img` and two `p` tags. 
// Inside of `character-comments-section` should be a `form`, including a "text" `input` and a "submit"
// `input`, that allows users to submit (not save, just add to the frontend) what they would say about
// the character Jerry. On submission the input should clear.
// Also insider `character-comments-section`  should be a `ul` with the id `character-comments-ul` that
// contains the submitted comments of each character.


// Side scroll through the `all-characters` ul and click on a character.
// When they select a character, the `main` should appear and information about that
// character (name, image, status, location name) should populate in the `character-info` section.
// When they click on a different character, this information should be replaced.
// The page `title` should also match the name of the character selected. 
// Use the `form`, to submit a character comment. Each comment should be a new `li` inside of `character-comments-ul`,
// with the selected character's name (in bold) and a comment (not bold).

// get api of all 