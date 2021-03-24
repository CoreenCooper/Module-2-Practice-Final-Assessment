// Side scroll through the `all-characters` ul and click on a character.
const main = document.querySelector("main");
const form = document.querySelector("form");
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
// character appears in `main` section below when selected
// character's name, image, status, location name populates in `character-info` section
// page `title` updates to match the character selected
// information updates when different character is selected

const displayCharacter = (e, res) => {
  main.style.display = "flex";
  res.results.forEach((char) => {
    const name = e.target.parentElement.lastElementChild.textContent;
    if (char.name === name) {
      const characterName = document.querySelector("#character-name");
      const characterImg = document.querySelector("#character-img");
      const characterStatus = document.querySelector("#character-status");
      const characterLocation = document.querySelector("#character-location");
      title.textContent = name;
      characterName.textContent = name;
      characterImg.src = e.target.parentElement.firstElementChild.src;
      characterStatus.textContent = char.status;
      characterLocation.textContent = char.location.name;
    }
  });
};

// Use the `form`, to submit a character comment. Each comment should be a new `li` inside of `character-comments-ul`,
// with the selected character's name (in bold) and a comment (not bold).
let res = {};
// dat

const displayComment = (e) => {
  e.preventDefault();
  const comment = document.querySelector("#comment");
  const characterCommentsUl = document.querySelector("#character-comments-ul");
  const li = document.createElement("li");
  characterCommentsUl.appendChild(li);
  li.innerHTML = `<b>${title.textContent}:</b> ${comment.value}`;
  comment.value = "";
};

const getCharacters = async () => {
  try {
    res = await axios.get("https://rickandmortyapi.com/api/character");
    getAllCharacters(res.data);
  } catch (err) {
    console.log("Something, something, something, something just ain't right");
  }
};

form.addEventListener("submit", displayComment);

allCharacters.addEventListener("click", (e) => {
  try {
   console.log(res)
    // const res = await axios.get("https://rickandmortyapi.com/api/character");
    displayCharacter(e, res.data);
  } catch (err) {
    debugger
    console.log("Something, something, something, something just ain't right");
  }
});

getCharacters();

//////////////Normalize Data///////////////////////
// const res = { data: { results: [{id: 1, name: "Coreen"}, {id: 2, name: "corey"}]}}

// const data = {};

// res.data.results.forEach(person => {
  //   data[person.id] = person;
  // })
  
  // data;
  
  ////////////////////////////////////////
// const res = { data: { results: [{id: 1, name: "Coreen"}, {id: 2, name: "corey"}]}}

// const dataNoramlizer = (arr) => {
//   const data = {};
//   arr.forEach(person => {
//     data[person.id] = person;
//   })
//   return data;
// }

// const data = dataNoramlizer(res.data.results)


