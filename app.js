// console.log("checking live server");
const btn = document.querySelector("button");
const user_name = document.querySelector(".name");
const email = document.querySelector(".email");
//   ----------------------------------------------------
const fetching = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  Array.from(data).forEach((details) => {
    user_name.innerHTML += `<li>${details.name}</li>`;
    email.innerHTML += `<li>${details.email}</li>`;
  });
};
const updateDom = () => {
  user_name.innerHTML = "";
  email.innerHTML = "";
};

btn.addEventListener("click", () => {
  updateDom();
  fetching()
    .then((data) => console.log("Successfully fetched !"))
    .catch((error) => console.log(error));
});
