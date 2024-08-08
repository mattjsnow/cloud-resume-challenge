const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
      "https://r6wyhwly5knogscrzrdg3zsnfq0psvoi.lambda-url.us-east-1.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = `Page Views: ${data}`;
}
updateCounter();