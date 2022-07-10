// Write your helper functions here!
require('isomorphic-fetch'); 

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
    if(isNaN(testInput)) {

if(testInput===""){
     value= "Empty";
}
else{
     value= 'Not a Number';
}
}  
  else{
   value=  'Is a number';
  }  
 return value;  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    document.getElementById("faultyItems").innerHTML=`
  
${"Pilot Chris is ready for launch"}
${"Co-Pilot Blake is ready for launch"}
`;

if (fuelLevel < 10000){
    document.getElementById("fuelLevel").innerHTML="There is not enough fuel for journey";
    document.getElementById("faultyItems").style.visiblity = "visible";
    document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = 'red';
}
  if (cargoLevel > 10000){
    document.queryselector("ol").style.visiblity = "visible";
    document.getElementById("cargoLevel").innerHTML = "There is too much mass for the shuttle to take off";
    document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = 'red';
  }
else{
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatus").innerHTML.style.color = 'green';
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
