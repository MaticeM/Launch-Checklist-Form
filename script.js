// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         let missionTarget = document.getElementById("missionTarget")
         let index = Math.floor(Math.random() * json.length)
         let data = json[index]
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${data.name}</li>
      <li>Diameter: ${data.diameter}</li>
      <li>Star: ${data.star}</li>
      <li>Distance from Earth: ${data.distance}</li>
      <li>Number of Moons: ${data.moons}</li>
   </ol>
   <img src="${data.image}">`
      })
   })
   
      let form = document.querySelector("form");
      let pilotStatusName = document.getElementById("pilotStatus")
      let coPilotStatusName = document.getElementById("copilotStatus")
      let submitButton = document.getElementById("formSubmit")
      let faultyItemsList = document.getElementById("faultyItems")
      let launchStatus = document.getElementById("launchStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
   
      form.addEventListener("submit", function(event) {
         event.preventDefault();
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let coPilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
   
         if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
         } else if (isNaN(pilotNameInput.value) === false || isNaN(coPilotNameInput.value) === false || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
            alert("Invalid input!");
         } else {
            faultyItemsList.style.visibility = "visible"
            pilotStatusName.innerHTML = `${pilotNameInput.value} is ready for launch.`
            coPilotStatusName.innerHTML = `${coPilotNameInput.value} is ready for launch.`
            if (Number(fuelLevelInput.value) < 10000 && Number(cargoMassInput.value) > 10000) {
            fuelStatus.innerHTML = "Fuel too low for launch."
            cargoStatus.innerHTML = "Cargo mass too high for launch."
            launchStatus.innerHTML = "Shuttle not ready for launch."
            launchStatus.style.color= "red"
         } else if (Number(fuelLevelInput.value) < 10000 && Number(cargoMassInput.value) <= 10000) {
            fuelStatus.innerHTML = "Fuel too low for launch."
            cargoStatus.innerHTML = "Cargo mass is ok for launch."
            launchStatus.innerHTML = "Shuttle not ready for launch."
            launchStatus.style.color= "red" 
         } else if (Number(fuelLevelInput.value) >= 10000 && Number(cargoMassInput.value) > 10000) {
            fuelStatus.innerHTML = "Fuel is ok for launch."
            cargoStatus.innerHTML = "Cargo mass is too high for launch."
            launchStatus.innerHTML = "Shuttle not ready for launch."
            launchStatus.style.color= "red" 
         } else {
            fuelStatus.innerHTML = "Fuel is ok for launch."
            cargoStatus.innerHTML = "Cargo mass is ok for launch."
            launchStatus.innerHTML = "Shuttle is ready for launch."
            launchStatus.style.color= "green" 
         }
         }
   
   })
   })
      
         
    
   
   /* This block of code shows how to format the HTML once you fetch some planetary JSON!
   <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${}</li>
      <li>Diameter: ${}</li>
      <li>Star: ${}</li>
      <li>Distance from Earth: ${}</li>
      <li>Number of Moons: ${}</li>
   </ol>
   <img src="${}">
   */
   