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
    if(testInput == undefined || testInput == ""){
     value= "Empty";
} else if (isNaN(testInput)){
     value= 'Not a Number';
} else{
   value=  'Is a number';
  }  
 return value;  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
        alert("All fields are required!");
        
 
       }else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number" || validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" ){

         alert("Make sure to enter valid information for each field");
       };
        
          
    
    
 
    

     document.getElementById("faultyItems").style.visibility = 'visible';
     document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
     document.getElementById("launchStatus").style.color = "green";
     document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
     document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot} is ready for launch`;

       //return;
    
    

if (fuelLevel < 10000){
   
   document.getElementById("fuelStatus").innerHTML="There is not enough fuel for journey";
   document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
   document.getElementById("launchStatus").style.color = 'red';
}
  if (cargoMass > 10000){
    document.getElementById("faultyItems").style.visiblity = "visible";
    document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
    document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = 'red';
  }

    







    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json){
            console.log(json);
            let div = document.getElementById("Mission Destination");
            for(i = 0; i < json.length; i++) {
                div.innerHTML += `
                <div class = "missionTarget">
                    <h2>"Mission Destination"</h2>
<ol>
                    <li>name:${json[i].Name} </li>
                    <li>Diamter:${json[i].Diameter} </li>
                    <li>Star: ${json[i].star}</li>
                    <li>Distance from Earth:${json[i].DistancefromEarth} </li>
                    <li>Number of Moons:${json[i].NumberofMoons} </li>

    </ol>
                  <img class = "  " src="${json[I].picture}">
</div>
`;
            }


        });
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
