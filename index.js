//inentify the <main> html element, to be used when content is added to the page from the API
const main = document.querySelector(`main`);
//create an event listener function and set it for when the page loads
//the function will contain an async anon function to allow await
document.addEventListener('DOMContentLoaded', async (event) => {
  //set the api to a variable
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`);
  //convert into a usable object
  const APIReturn = await response.json();
  //grab the data I need from the object
  const partyData = APIReturn.data;

  renderPartyData = partyData.forEach(party => {
    partySection = document.createElement(`section`);
    buttonSection = document.createElement(`section`)
    partySection.innerHTML = `
    <h2>${party.name}</h2>
    <h4>Date & Time: ${party.date}</h4>
    <h4>Location: ${party.location}</h4>
    <h5>About:</h5>
    <p>${party.description}</p>
    `
    main.append(partySection);
  });
  renderPartyData();
  







  //OLD DISCARDED CODE:
  
  //map out the names from the array
  // const partyNames = partyData.map((party) => {
  //   return party.name;
  // });
  // //map out locations from the array
  // const partyLocations = partyData.map((party) => {
  //   return party.location;
  // });
  // //map out dates from the array
  // const partyDates = partyData.map((party) => {
  //   return party.date
  // });
  // //map out party descriptions from the array
  // const partyDescriptions = partyData.map((party) => {
  //   return party.description
  // });
  // //create a section for each event and put it in the <main> element
  // // const eventSection = document.createElement(`section`)
  // // eventSection.innerHTML = `
  // //   <h2>${}
  // // `
  // console.log(partyData);
  // console.log(partyNames);
  // console.log(partyLocations);
  // console.log(partyDates);
  // console.log(partyDescriptions);
});

