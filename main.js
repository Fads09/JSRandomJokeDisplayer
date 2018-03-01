var paragraph = document.getElementById('joke');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  getJoke();
});



function getJoke() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://api.icndb.com/jokes/random');
  ourRequest.addEventListener('load', function(){
    var response = JSON.parse(ourRequest.response);
    paragraph.innerHTML = response.value.joke;
  });
  ourRequest.send();
}
