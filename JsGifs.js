const API_KEY = "apiKey=8dHGvhpcAH8zaegGhpK1oJ1pKWpFSEU5"

const URL = "https://api.giphy.com/v1"

const RANDOM_END_POINT = "/gifs/random?"
const TRENDING_END_POINT = "/gifs/trending"

function getGif() {
    // we create a new instance of an HTTP request
    var request = new XMLHttpRequest();
    //we get the text that the user has typed in
    searchTerm = document.getElementById('input-box').value;
    // we set up the url endpoint we want to reach
    var searchQuery = "&tag=" + searchTerm;
    var requestUrl = URL + RANDOM_END_POINT + API_KEY + searchQuery

    // we make the request
    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send();

    //we do something with the successful response
    request.onload = function () {
        var response = request.response;
        var imageUrl = response.data.image_url;
        document.getElementById('gif').src = imageUrl
    }

}


function GetGif1() {
    var request = new XMLHttpRequest
    var requestUrl = URL + TRENDING_END_POINT + API_KEY

    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var response = request.response;
        var imageUrl = response.data.image_url;
        document.getElementById('First').src = imageUrl
    }
}
