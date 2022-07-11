//const { ConsoleReporter } = require('jasmine');

// Write your helper functions here!
//require('isomorphic-fetch'); 

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let value = ""
    if(testInput===""){
     value= "Empty";
} else if (isNaN(testInput)){
     value= 'Not a Number';
} else{
   value=  'Is a number';
  }  
 return value;  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    
    if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty"){
        alert("All fields are required!");
        
 
       }else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number" || validateInput(pilot.value) === "Is a number" || validateInput(copilot.value) === "Is a number" ){

         alert("Make sure to enter valid information for each field");
       };
        
          
    
     // if(fuelLevelName.value < 10000  || cargoLevelName.value > 10000){
 
     //  }
       
document.getElementById("faultyItems").innerHTML=`
  Pilot ${pilot} is ready for launch
  Co-Pilot ${copilot}is ready for launch

`;

if (fuelLevel < 10000){
    document.getElementById("fuelLevel").innerHTML="There is not enough fuel for journey";
   document.getElementById("faultyItems").style.visiblity = "visible";
    document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = 'red';
}
  if (cargoMass > 10000){
    list.style.visiblity = "visible";
    document.getElementById("cargoMass").innerHTML = "There is too much mass for the shuttle to take off";
    document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = 'red';
  }
else{
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").style.color = "green";
}






    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
