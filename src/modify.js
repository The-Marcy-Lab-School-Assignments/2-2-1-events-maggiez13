/** FEEDBACK: Great job getting all test cases to pass!!! Your code is super clean and you are killing it! */

const clickCounterHandler = () => {
  const button = document.getElementById("click-button");
  button.dataset.clicks = Number(button.dataset.clicks) + 1;
  const clicks = button.dataset.clicks;
  if (Number(clicks) === 1) {
    button.textContent = `I've been clicked 1 time.`
  } else {
    button.textContent = `I've been clicked ${clicks} times!`
  }
};

const handleKeydown = (event) => {
  const keyCode = event.code;
  const paragraph = document.getElementById("keydown-tracker");
  if (keyCode === "KeyA") paragraph.textContent = "You pressed KeyA"; 
  if (keyCode === "Space") paragraph.textContent = "You pressed Space";
  if (keyCode === "Enter") paragraph.textContent = "You pressed Enter";
};

const clickCounterHandlerInline = () => {
  const button = document.getElementById("inline-example");
  button.dataset.clicks = Number(button.dataset.clicks) + 1;
  const clicks = button.dataset.clicks;
  if (Number(clicks) === 1) {
    button.textContent = `I've been clicked 1 time.`
  } else {
    button.textContent = `I've been clicked ${clicks} times!`
  }
};

const handleDelegation = (event) => {
  const resultSpan = document.getElementById('delegation-result');
  if (event.target.matches(".grid-item")) {
    resultSpan.textContent = event.target.textContent;
  }
};

const addNewRandomNumber = () => {
  const ul = document.getElementById("random-numbers");
  const li = document.createElement("li");
  li.textContent = Math.random();
  ul.appendChild(li);
};

const main = () => {
  // 1
  document.getElementById("click-button").addEventListener("click", clickCounterHandler);
  // 2
  const p = document.querySelector("body");
  p.addEventListener("keydown", handleKeydown);
  // 3
  document.getElementById("inline-example").addEventListener("click", clickCounterHandlerInline);
  // 4 
  document.querySelector('#delegation-result').addEventListener("click", handleDelegation)
  // 5
  document.getElementById("add-random-num").addEventListener("click", addNewRandomNumber);
  // 6 
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  const removeDelegationContainer = document.querySelector("#remove");
  removeDelegationContainer.addEventListener("click", (event) => {
    delegationContainer.removeEventListener("click", handleDelegation);
  });
};

main();


