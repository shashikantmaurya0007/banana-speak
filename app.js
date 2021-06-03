
var buttontranslate = document.querySelector("#btn-translate");
var textinput = document.querySelector("#text-input");
var output = document.querySelector("#output-area");
function errorhandler() {
  alert("something wrong with server please try later");
}
function eventhandler() {
  var s = textinput.value;
  fetch(
    "https://api.funtranslations.com/translate/ferb-latin.json" +
      "?" +
      "text=" +
      s
  )
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      output.innerText = translated;
    })
    .catch(errorhandler);
}

buttontranslate.addEventListener("click", eventhandler);
