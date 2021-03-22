// Side scroll through the `all-characters` ul and click on a character.
const main = document.querySelector("main");
const title = document.querySelector("title");
const allCharacters = document.querySelector("#all-characters");

const getAllCharacters = (res) => {
  res.results.forEach((char) => {
    const character = document.createElement("li");
    const photoImg = document.createElement("img");
    const characterName = document.createElement("p");

    allCharacters.appendChild(character);
    character.appendChild(photoImg);
    character.appendChild(characterName);

    photoImg.src = char.image;
    characterName.textContent = char.name;
  });
};

// When they select a character, the `main` should appear
// the character's (name, image, status, location name) should populate in the `character-info` section.
// The page `title` should also match the name of the character selected.
// When they click on a different character, this information should be replaced.

// const selectCharacter = (e) => {
//   main.style.display = "flex";
//   const characterName = e.target.parentElement.textContent;
//   const name = e.target.parentElement.lastElementChild.textContent;
//   const characterImg = document.querySelector("#character-img");
//   const characterStatus = document.querySelector("#character-status");
//   const characterLocation = document.querySelector("#character-location");
//   //   const name = e.target.parentElement.textContent;
//   title.textContent = name;
//   characterName.textContent = name;
//   debugger;
//   characterImg.src = e.target.parentElement.src;
//   //   characterStatus.textContent =
//   //   characterLocation.textContent =
// };

const getCharacters = (e) => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => {
      if (!res.ok) {
        throw Error("Something is wrong.");
      }
      return res.json();
    })
    .then((res) => {
      getAllCharacters(res);
      //   selectCharacter(e);
    });
};

allCharacters.addEventListener("click", (e) => {
//   selectCharacter(e);
  debugger;
});

getCharacters();

// A `main` tag that starts not on the page
// Inside of `main` should be two sections. The first section should have the id `character-info`
// the second should have the id `character-comments-section`.
// Inside of `character-info` should be be an `h3` an `img` and two `p` tags.
// Inside of `character-comments-section` should be a `form`, including a "text" `input` and a "submit"
// `input`, that allows users to submit (not save, just add to the frontend) what they would say about
// the character Jerry. On submission the input should clear.
// Also insider `character-comments-section`  should be a `ul` with the id `character-comments-ul` that
// contains the submitted comments of each character.

// Use the `form`, to submit a character comment. Each comment should be a new `li` inside of `character-comments-ul`,
// with the selected character's name (in bold) and a comment (not bold).

// get api of all
