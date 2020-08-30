const hello = document.querySelector(".hello");
const box = document.querySelector(".box");
const body = document.querySelector("body");

function getColor() {
  let color = "#";
  const charset = "0123456789ABCDEF";
  for (let i = 0; i <= 5; i++) {
    const take = Math.floor(Math.random() * 16);
    color += charset.charAt(take);
  }
  return color;
}

setInterval(() => {
  const firstColor = getColor();
  hello.style.color = firstColor;
  body.style.backgroundColor = firstColor;
  box.style.backgroundColor = getColor();
}, 400);
