// Write your JavaScript code here!

const { addDestinationInfo } = require("./scriptHelper");

//const { validateInput } = require("./scriptHelper");


window.addEventListener("load", function() {
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result.json();
   listedPlanets.then(function (res) {
      addDestinationInfo( pickPlanet(res));
   });
}); 
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  // })

  
 //});
// window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  

      let list = document.getElementById ("faultyItems");
      let h2 = document.getElementById ("launchStatus");
      let pilot = document.querySelector("input[name= pilotName]").value;
      let copilot = document.querySelector("input[name= copilotName]").value;
      let fuelLevel = document.querySelector("input[name= fuelLevel]").value;
      let cargoMass = document.querySelector("input[name= cargoMass]").value; 
      
      
     formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) 
    });
});   
  

       








    
