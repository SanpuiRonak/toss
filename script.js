window.onload = (event) => {
  main();
};

function main() {
  const button = document.getElementById("button");
  button.addEventListener("click", flipCoin);
}
let x = 0;
function flipCoin() {
  const coin = document.getElementById("c");

  let cState = x % 360 ? 1 : 0;
  let next = getRand();
  // console.log(cState);
  console.log(next);

  if (cState === next) {
    x += 900;
  } else {
    x += 900 - 180;
  }

  coin.style.transition = "ease-out 2.5s";
  coin.style.transform = `rotateY(${x}deg)`;
  // x += 900 - 180;
  // coin.style.transform = "rotateY(-180deg)";
}

const getRand = () => Math.floor(Math.random() * (1 - 0 + 1)) + 0;
