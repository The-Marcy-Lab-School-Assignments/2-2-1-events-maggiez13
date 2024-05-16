const clickCounter = () => {
  const button = document.getElementById("add-one");
  const result = document.getElementById("results");
  let counter = 0;
  button.addEventListener("click", (event) => {
    counter++;
    result.textContent = counter; 
  })
}

clickCounter();
