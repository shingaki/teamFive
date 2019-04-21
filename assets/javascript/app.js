var queryURL;

var key = "Z6UMQHvbuwNHtF59FQI7DartEL4P94IiZfF_gOELhwv1KwBA8JQh1OS0kqJ8FJPN4HRW_OLCeiPUECYNN624iyC9ShMHp2ZOG4l6Nk7oji_xv53LVU_VknLMHI22XHYx"


var responseData;
var myURL;

myURL = "https://api.yelp.com/v3/categories";


function getRestaurants(queryURL) {

    console.log('call getRestaurants');

    $.ajax({
        url: queryURL,
        dataType: "jsonp",
        jsonpCallback: 'cb',
        async: 'false',
        cache: true,
        // method: "GET",
        // contentType: "application/json",
        headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Request-Headers':'X-Custom-Header',
            // 'Access-Control-Request-Method':"GET",
            'Authorization': "Bearer Z6UMQHvbuwNHtF59FQI7DartEL4P94IiZfF_gOELhwv1KwBA8JQh1OS0kqJ8FJPN4HRW_OLCeiPUECYNN624iyC9ShMHp2ZOG4l6Nk7oji_xv53LVU_VknLMHI22XHYx",
        }
    })
        .then(function (response) {
            responseData = response.data;
            console.log(responseData);
        });
};

getRestaurants(myURL);

// var YELP_API_KEY = "Z6UMQHvbuwNHtF59FQI7DartEL4P94IiZfF_gOELhwv1KwBA8JQh1OS0kqJ8FJPN4HRW_OLCeiPUECYNN624iyC9ShMHp2ZOG4l6Nk7oji_xv53LVU_VknLMHI22XHYx"
//
// // require('dotenv').config();
//
// // const yelp = require('yelp-fusion');
//
// const apiKey = process.env.YELP_API_KEY;
//
// const searchRequest = {
//     term: 'restaurants',
//     location: 'Los Angeles',
// };
//
// const client = yelp.client(apiKey);
//
// client.search(searchRequest)
//     .then((response) => {
//         console.log(response.jsonBody);
//     })
//     .catch((error) => {
//         console.log(error);
//     });