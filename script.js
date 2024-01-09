!(async function () {
  const searchBar = document.querySelector(".search-bar");
  const searchBtn = document.querySelector(".button");
  const soundBtn = document.querySelector(".volume");
  const wordResult = document.querySelector(".word");
  const dictionary = document.querySelector('.hide')
 



  const link = "https://api.dictionaryapi.dev/api/v2/entries/en/<word>";


  
  const dictionaryApi = async (word) =>{
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    return response[0]
  }
  
  const updatePage = async () =>{
    const info = await dictionaryApi(searchBar.value)
   
  
    let partOfSpeechArr = []
    for (let i = 0; i<info.meanings.length-1; i++){
      partOfSpeechArr.push(info.meanings[i].partOfSpeech)
    }
dictionary.innerHTML = ` 
<div class="word__container">
  <h3>${info.word}</h3><button  class="material-symbols-outlined">
  <span> <audio controls src="${info.phonetics[0].audio}"></audio></span>       
  </button>
</div>
<div class="details">${info.phonetic || ''}</div>
<div class="details"> <span>${partOfSpeechArr.map(e => e).join(', ')}</span> </div>
<div class="definition">${info.meanings[0].definitions[0].definition}
<br><div class="sentence">${info.meanings[0].definitions[0].example || ''}</div>
`

  }
  
searchBtn.addEventListener("click", updatePage);

searchBar.addEventListener("keypress", function(event) {
 
  if (event.key === "Enter") {
    updatePage()
  }

})

})();

