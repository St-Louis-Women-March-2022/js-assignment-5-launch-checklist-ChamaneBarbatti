// Write your JavaScript code here!

//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {

   /*let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
*/
 //});
// window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  

      let listName = document.getElementById ("faultyItems");
      let pilotNameInput = document.querySelector("input[name= pilotName]");
      let copilotName = document.querySelector("input[name= co-pilot]");
      let fuelLevelName = document.querySelector("input[name= fuelLevel]");
      let cargoLevelName = document.querySelector("input[name= cargoLevel]"); 
      if (pilotNameInput.value === "" || copilotName.value === "" || fuelLevelName.value === "" || cargoLevelName.value === ""){
      
          alert("All fields are required!");
         
      };
      if(fuelLevelName.value < 10000  || cargoLevelName.value > 10000){

      }
      

    });
  
  });
       

  



    
