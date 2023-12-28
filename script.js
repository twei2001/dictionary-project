!(async function () {
  const searchBar = document.querySelector(".search-bar");
  const searchBtn = document.querySelector(".button");
  const soundBtn = document.querySelector(".volume");
  const wordResult = document.querySelector(".word");
  const link = "https://api.dictionaryapi.dev/api/v2/entries/en/<word>";

  searchBtn.addEventListener("click", () => {
    console.log("btn working");
  });
  
})();
