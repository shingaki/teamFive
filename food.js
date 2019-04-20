//********************************************************************
//  function getFood(Category) - Event handler for dropdown menu selection
//  The purpose of this function is to do an API Ajax Query for the input
//  Category for the global variable CurrentCity.  Once the data comes back the 
//  appropriate data is parsed from the JSON and entered into the FoodArray.
//  
//********************************************************************
function getFood(Category) {

if (DebugOn) console.log ("In getFood: " + CurrentCity + "," + Category);
// ajax Query with the cityName and Category

// after response from query

  // create pointer to empty FoodArray
  var FoodArray = [];

  // One by one fill the FoodArray  
  // Also need to make sure that there are FoodLimit Food in the JSON array
  for (var i=0; i < FoodLimit; i++) {
     
    // create object of Food
    var Food = new Object();

     // fill the Food object from the JSON Data

     if (MockUp) {
        // *** mockup code *********
        Food.Name = "Food Name " + i;
        Food.Addr = "Food Location " + i;
        Food.Phone = "Food Phone " + i;
        Food.Rate = "Food Rating " + i;
        Food.Website = "Food Website Url " + i;
        //  *** mockup code ************
     } // if MockUp
     
     // push the Food object into the FoodArray 
     FoodArray.push(Food);
  }   // for ()

  // Display the data on Food Page
  UpdateFoodDisplay(FoodArray);

}  // function getFood (Category)

//********************************************************************
//  function UpdateFoodDisplay (Array)
//  The purpose of this function is display the contents of Array on
//  the Food Page
//********************************************************************
function UpdateFoodDisplay (Array) {
    if (DebugOn) console.log ("In UpdateFood Display: ", Array);

    if (DebugOn) {
        for (var i = 0; i < Array.length; i++)  {
            console.log ("Food Name: " + Array[i].Name);
            console.log ("Food Location: " + Array[i].Addr);
            console.log ("Food Phone: " + Array[i].Phone);
            console.log ("Food Rate: " + Array[i].Rate);
            console.log ("Food Website: " + Array[i].Website);
        }  // for
    }  // if DebugOn
 
    for (var i = 0; i < Array.length; i++)  {

        // Populate the new row of display data

        //  name

        // addr

        // phone

        // rating

        // website url 
        
        // Display the new row
    }  // for

}  // UpdateFoodDisplay (Array)


//**************************************************************************
//  program main
getFood("Dallas", "Mexican");


