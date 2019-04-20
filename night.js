//********************************************************************
//  function getNight(Category) Event handler for dropdown menu selection
//  The purpose of this function is to do an API Ajax Query for the input
//  Category for the global variable CurrentCity.  Once the data comes back the 
//  appropriate data is parsed from the JSON and entered into the NightArray.
//********************************************************************
function getNight(Category) {

    if (DebugOn) console.log ("In getNight: " + CurrentCity + "," + Category);
    // ajax Query with the cityName and Category
    
    // after response from query
    
      // create pointer to empty NightArray
      var NightArray = [];
    
      // One by one fill the NightArray  
      // Also need to make sure that there are NightLimit Night in the JSON array
      for (var i=0; i < NightLimit; i++) {
         
        // create object of Night
        var Night = new Object();
    
         // fill the Night object from the JSON Data
    
         if (MockUp) {
            // *** mockup code *********
            Night.Name = "Night Name " + i;
            Night.Addr = "Night Location " + i;
            Night.Phone = "Night Phone " + i;
            Night.Rate = "Night Rating " + i;
            Night.Website = "Night Website Url " + i;
            //  *** mockup code ************
         }  // if MockUp
    
         // push the Night object into the NightArray 
         NightArray.push(Night);
      }   // for ()
    
      // Display the data on Night Page
      UpdateNightDisplay(NightArray);
    
    }  // function getNight (Category)
    
    //********************************************************************
    //  function UpdateNightDisplay (Array)
    //  The purpose of this function is display the contents of Array on
    //  the Night Page
    //********************************************************************
    function UpdateNightDisplay (Array) {
        if (DebugOn) console.log ("In UpdateNight Display: ", Array);
    
        if (DebugOn) {
            for (var i = 0; i < Array.length; i++)  {
                console.log ("Night Name: " + Array[i].Name);
                console.log ("Night Location: " + Array[i].Addr);
                console.log ("Night Phone: " + Array[i].Phone);
                console.log ("Night Rate: " + Array[i].Rate);
                console.log ("Night Website: " + Array[i].Website);
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
    
    }  // UpdateNightDisplay (Array)
    
    
    //**************************************************************************
    //  program main
    getNight("Dallas", "Bars");
    
    
    