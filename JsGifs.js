const API_KEY = "apiKey=8dHGvhpcAH8zaegGhpK1oJ1pKWpFSEU5"

const URL = "https://api.giphy.com/v1"

const TRENDING = "/gifs/trending?"

function getGifs() {
  // we create a new instance of an HTTP request
  var request = new XMLHttpRequest();
  // we set up the url endpoint we want to reach
  var requestUrl = URL + TRENDING + API_KEY + "&limit=10"
  
  // we make the request
  request.open('GET', requestUrl);
  request.responseType = 'json';
  request.send();

  //we do something with the successful response
  request.onload = function() {
    var response = request.response;
    for(var i = 0; i < 10; i++) {
      document.getElementById('gif' + (i + 1)).src = response.data[i].images.fixed_width.url;
    }
  }
}
