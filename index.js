//API base URL
const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`;

//Selected the container to store country card and select
const container = document.querySelector(".container");
const sortSelect = document.querySelector("#sort");

//Calling the getData() function on load
getData();

//Added event listener on select tag for the change in value and called displayData() function sor showing the data.
sortSelect.addEventListener("change", async () => {
  const sortValue = sortSelect.value;
  if (sortValue === "asc" || sortValue === "desc") {
    const response = await fetch(`${url}?sort=population&order=${sortValue}`);
    const data = await response.json();
    displayData(data.data);
  } else {
    const response = await fetch(`${url}`);
    const data = await response.json();
    displayData(data.data);
  }
});

//getData() function for handling the fetch request
async function getData() {
  let response = await fetch(`${url}`);
  let data = await response.json();
  console.log(data);
  displayData(data.data);
}

//Creating the card and appending it in the container
function displayData(data) {
  container.innerHTML = "";
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("h3");
    name.textContent = `Country: ${ele.country}`;

    let rank = document.createElement("p");
    rank.textContent = `Rank: ${ele.Rank}`;

    let population = document.createElement("p");
    population.textContent = `Population: ${ele.population}`;

    card.append(name, rank, population);

    container.append(card);
  });
}
