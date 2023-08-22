// List of technologies
const frameworks = [
  "Nest.js",
  "Spring",
  "Asp Dotnet Core",
  "Ruby On Rails",
  "Node.js & Express",
  "Angular",
  "Symfony",
  "Laravel",
  "Django",
  "Javascript",
  "Express.js",
  "Meteor",
  "PostgreSQL",
  "HTML",
  "CSS",
  "React.js & Redux",
  "Mongo DB",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function replaceTechnologies() {
  const technos = document.querySelectorAll(".techno");
  console.log("#Previous values\n===============");
  technos.forEach((t, i) => console.log(`${i + 1} - ${t.innerText}`));
  const usedIndices = new Set();

  technos.forEach((techno, index) => {
    let randomIndex = getRandomIndex(frameworks.length); //13

    //usedIndices=[13,2,3,4]

    while (usedIndices.has(randomIndex)) {
      randomIndex = getRandomIndex(frameworks.length); //5
    }
    usedIndices.add(randomIndex); //5

    const previousValue = techno.textContent; //HTML
    const newValue = frameworks[randomIndex]; //5 -> frameworks[5] -> Angular

    if (previousValue !== newValue) {
      techno.classList.add("changed");
    } else {
      techno.classList.remove("changed");
    }

    techno.textContent = newValue;
  });
}

const randomButton = document.querySelector("#randomButton");
randomButton.addEventListener("click", replaceTechnologies);
