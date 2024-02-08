const url = "https://kea-alt-del.dk/t7/superheroes/";

fetch(url)
  .then((response) => response.json())
  .then(dataReceived);
function dataReceived(data) {
  //We have some data here //
  console.log(data);
  data.forEach(listSuperheroes);
}
function listSuperheroes(oneSuperhero) {
  console.log("listSuperhero");
  const superhero = document.querySelector("template").content;
  const myClone = superhero.cloneNode(true);

  myClone.querySelector("h2").textContent = oneSuperhero.superName;

  myClone.querySelector("img").src = oneSuperhero.img;
  myClone.querySelector("h3").textContent = oneSuperhero.civilName;
  myClone.querySelector("p").textContent = oneSuperhero.age;

  const parentElement = document.querySelector("main");

  parentElement.appendChild(myClone);

  //oneSuperhero.superName
}
