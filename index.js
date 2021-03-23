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

const selectCharacter = (e) => {
  main.style.display = "flex";
  const characterName = document.querySelector("#character-name");
  const name = e.target.parentElement.lastElementChild.textContent;
  const characterImg = document.querySelector("#character-img");
  // const characterStatus = document.querySelector("#character-status");
  // const characterLocation = document.querySelector("#character-location");
  title.textContent = name;
  characterName.textContent = name;
  characterImg.src = e.target.parentElement.firstElementChild.src;
  //   characterStatus.textContent =
  //   characterLocation.textContent =
};

// Use the `form`, to submit a character comment. Each comment should be a new `li` inside of `character-comments-ul`,
// with the selected character's name (in bold) and a comment (not bold).

const getCharacters = async () => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    getAllCharacters(res.data);
  } catch (err) {
    console.log("Something, something, something, something just ain't right");
  }
};

allCharacters.addEventListener("click", (e) => {
  selectCharacter(e);
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

// fetch //////////////////////////////////////////
// const getCharacters = (e) => {
//   // const res = axios.get("https://rickandmortyapi.com/api/character")
//   fetch("https://rickandmortyapi.com/api/character")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("Something is wrong.");
//       }
//       return res.json();
//     })
//     .then((res) => {
//       getAllCharacters(res);
//       //   selectCharacter(e);
//     });
// };

// allCharacters.addEventListener("click", (e) => {
// //   selectCharacter(e);
//   debugger;
// });

// get api of all

// async /////////////////////
// // async - allows us to assign the results of fetch to a variable
// const getCharacters = async () => {
//   // res variable has the same value as the result from .them(promise object)
//   try {
//     // const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
//     // replace fetch with axios.get
//     const res = await axios.get("https://rickandmortyapi.com/api/character?page=1");
//     // to get json it must be assigned to a variable with await - must put await in front of json()
//     // axios skips the step of adding await to json()
//     // remove  axios returns json() for us
//     // const data = await res.json();

//     displayAllCharacters(res.data);

//     // look about creating this event listener outside
//     ul.addEventListener("click", (event) => {
//       // updated res to data
//       eachCharacter(res.data, event);
//     });

//   } catch (err) {
//     console.log(err);
//   }
// };
