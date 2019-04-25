// var queryURL;
//
// var key = "Z6UMQHvbuwNHtF59FQI7DartEL4P94IiZfF_gOELhwv1KwBA8JQh1OS0kqJ8FJPN4HRW_OLCeiPUECYNN624iyC9ShMHp2ZOG4l6Nk7oji_xv53LVU_VknLMHI22XHYx"
//
//
// var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/categories";
// var apiKey = "Z6UMQHvbuwNHtF59FQI7DartEL4P94IiZfF_gOELhwv1KwBA8JQh1OS0kqJ8FJPN4HRW_OLCeiPUECYNN624iyC9ShMHp2ZOG4l6Nk7oji_xv53LVU_VknLMHI22XHYx"
//
// $.ajax({
//     url: queryURL,
//     method: "GET",
//     headers: {
//         "accept": "application/json",
//         "x-requested-with": "xmlhttprequest",
//         "Access-Control-Allow-Origin":"*",
//         "Authorization": `Bearer ${apiKey}`
//     }
// }).then(function(res) {
//     var results = res.categories
//     console.log(results);
// });

// //eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2JmMzFlZDBhZDNiMWJiMWJkYTk0MmU4MjVhZTg0MiIsInN1YiI6IjVjYmU2OTYxMGUwYTI2NDFlZGY0NDNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XCrTXGw24MmKGWVEjdfpXqtSkl3v39yMQZ56aMyuuxQ
//
//
// // Get the movie information
//
// // var queryURL;
//
// // var key = "Z6UMQHvbuwNHtF59FQI7DartEL4P94IiZfF_gOELhwv1KwBA8JQh1OS0kqJ8FJPN4HRW_OLCeiPUECYNN624iyC9ShMHp2ZOG4l6Nk7oji_xv53LVU_VknLMHI22XHYx"
//
// // OMDB
//
// //https://api.themoviedb.org/3/movie/upcoming?api_key=27bf31ed0ad3b1bb1bda942e825ae842&language=en-US&page=1
//
// var apiKey = "27bf31ed0ad3b1bb1bda942e825ae842";
//
// var queryURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + apiKey + "&language=en-US&page=1";
//
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//
//     console.log(response);
//
// })


//curl -X GET   https://www.eventbriteapi.com/v3/categories/   -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN'

// var queryURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search";

var queryURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?location.address=DALLAS&start_date.range_start=2019-04-24T00:00:01Z&start_date.range_end=2019-05-31T00:00:01Z&token=H4CT3G2MGSHPWA6SXQIL"
var apiKey = "H4CT3G2MGSHPWA6SXQIL"

var results;

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin":"*",
        "Authorization": `Bearer ${apiKey}`
    }
}).then(function(res) {
    results = res;
    console.log(results);
    console.log(results.events[0].name.text);
    console.log(results.events[0].summary);
    console.log(results.events[0].logo.url);
    console.log(results.events[0].start.local);
});

// var nameOfEvent = results.event[0];
// console.log(nameOfEvent);

// var nameOfEvent = JSON.stringify(results)
// console.log(nameOfEvent);






