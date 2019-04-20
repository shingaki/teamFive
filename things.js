//********************************************************************
//  function getThingsToDo(Category) Event handler for dropdown menu selection
//  The purpose of this function is to do an API Ajax Query for the input
//  Category for the global variable CurrentCity.  Once the data comes back 
//  the appropriate data is parsed from the JSON and entered into the ThingsArray.
//********************************************************************
function getThingsToDo(Category) {

if (DebugOn) console.log ("In getThingsToDo: " + CurrentCity + "," + Category);

// based on the category, determine which api to use most likely switch statement

// ajax Query with the CurrentCity and Category

// after response from query

  // create pointer to empty ThingsArray
  var ThingsArray = [];

  // One by one fill the ThingsArray  
  // Also need to make sure that there are ThingsLimit things in the JSON array
  for (var i=0; i < ThingsLimit; i++) {
     
    // create object of Things
    var Things = new Object();

     // fill the Things object from the JSON Data
     
     if (MockUp) {
        // *** mockup code *********
        Things.Name = "Things Name " + i;
        Things.Addr = "Things Location " + i;
        Things.Phone = "Things Phone " + i;
        Things.Rate = "Things Rating " + i;
        Things.Website = "Things Website Url " + i;
        //  *** mockup code ************
    }  // if MockUp

     // push the Things object into the ThingsArray 
     ThingsArray.push(Things);
  }   // for ()

  // Display the data on Things To Do Page
  UpdateThingsDisplay(ThingsArray);

}  // function getThingsToDo (Category)

//********************************************************************
//  function UpdateThingsDisplay (Array)
//  The purpose of this function is display the contents of Array on
//  the Things To Do Page
//********************************************************************
function UpdateThingsDisplay (Array) {
    if (DebugOn) console.log ("In UpdateThings Display: ", Array);

    if (DebugOn) {
        for (var i = 0; i < Array.length; i++)  {
            console.log ("Things Name: " + Array[i].Name);
            console.log ("Things Location: " + Array[i].Addr);
            console.log ("Things Phone: " + Array[i].Phone);
            console.log ("Things Rate: " + Array[i].Rate);
            console.log ("Things Website: " + Array[i].Website);
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

}  // UpdateThingsDisplay (Array)


//**************************************************************************
//  program main
getThingsToDo("Dallas", "Movies");


