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
  //render the data fetched frm the API to sections, and append them to <main>
  renderPartyData = partyData.forEach(party => {
    partySection = document.createElement(`section`);
    partySection.innerHTML = `
    <h2>${party.name}</h2>
    <h4>Date & Time: ${party.date}</h4>
    <h4>Location: ${party.location}</h4>
    <h5>About:</h5>
    <p>${party.description}</p>
    `
    main.append(partySection);
  });
});

//add an event listener to the button and take the user an interface that allows them to fill out a form
document.addEventListener(`click`, (event) => {
  if(event.target.tagName === `BUTTON`) {
    const renderNewPartyForm = () => {
      main.innerHTML = `
      <form>
        <input placeholder="Your Name"></input>
        <input placeholder="Your Event"</input>
        <input placeholder="Event Date and Time"</input>
        <input placeholder="Event Location"></input>
        <input id="describe-input" placeholder="Please briefly describe your event"></input>
      </form>
      `
    }
  renderNewPartyForm();
   }
});


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