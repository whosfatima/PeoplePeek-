const users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Fatemeh", age: 17 },
  { id: 3, name: "Negar", age: 30 },
  { id: 4, name: "Milad", age: 22 },
  { id: 5, name: "Pari", age: 27 },
];
const FilterUser = document.querySelector(".UserContainer");
const button = document.querySelector("button");
const input = document.querySelector("input");

const renderUser = (list) => {
  let str = " ";
  list.forEach(
    (user) =>
      (str += `
        <div class ='Useritem'>
        <p><b>Name:</b>${user.name}</p>
        <p><b>Age:</b>${user.age}</p>
        </div>
        `)
  );
  FilterUser.innerHTML = str;
};
window.onload = () => {
  renderUser(users);
};
button.onclick = () => {
  let UserInput = input.value.toLowerCase();
  const SearchUser = users.filter((user) =>
    user.name.toLowerCase().includes(UserInput)
  );
  if(UserInput.length > 0) {
    renderUser(SearchUser)
  } else{
  FilterUser.innerHTML = '<p>sorry</p>';
  }
};
