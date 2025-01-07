const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');
const errorEl =  document.getElementById('error')


function addGoal() {
   const enteredValue = inputEl.value;

     if(enteredValue == '') {
       errorEl.style.display = 'block';
     }
     else {
        const listItemEl = document.createElement('li');
        const listClasses = ['py-2', 'border', 'border-slate-200', 'px-3', 'mb-1']
        listItemEl.classList.add(...listClasses);
        listItemEl.textContent = enteredValue;
        listEl.appendChild(listItemEl);     
        storeGoal(enteredValue);
        inputEl.value = '';
     }

}

function storeGoal(goal){

  let goals = JSON.parse(localStorage.getItem('goals')) || [];

  console.log(goals);
  goals.push(goal);

  localStorage.setItem('goals', JSON.stringify(goals));

}

// Function to load goals from local storage
function loadGoals() {
  let goals = JSON.parse(localStorage.getItem('goals')) || [];
  goals.forEach(goal => {
  const listItemEl = document.createElement('li');
  const listClasses = ['py-2', 'border', 'border-slate-200', 'px-3', 'mb-1'];
  listItemEl.classList.add(...listClasses);
  listItemEl.textContent = goal;
  listEl.appendChild(listItemEl);
  });
  }
  
window.onload = loadGoals;

inputEl.addEventListener("keydown", (event) => {
    errorEl.style.display = 'none';
});
buttonEl.addEventListener('click', addGoal);


// const jsonString = '{"name": "John Doe", "age": 30, "Gender": "Female"}';

// console.log(jsonString)

// const jsonObject = JSON.parse(jsonString);

// console.log(jsonObject.Gender);


const jsonObject = { name: "John Doe", age: 30 };

console.log(jsonObject);

const jsonString = JSON.stringify(jsonObject);
// console.log(jsonString); 





