const input = document.getElementById("userinput");
const para = document.getElementById("output");
const btn = document.getElementById("btn");

input.addEventListener("input", function () {
  para.innerText = "Your name is: " + input.value;
});

btn.addEventListener("click", async function () {
  const data = await fetch("http://localhost:3000");
  console.log(data);
});
