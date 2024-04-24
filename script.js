//checkboxes
const checkboxes = document.querySelectorAll(".custom-checkbox");
//inputboxes
const inputboxes = document.querySelectorAll(".goal-input");
//error line
const error = document.querySelector(".pAfterBar");


const barValue = document.querySelector(".barValue");
const numberOfTask = document.querySelector(".numberOfTask");

var numOfT = parseInt(numberOfTask.innerHTML.slice(0, 1));



checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", () => {
    const isInputBoxFilled = [...inputboxes].every((input) => {
      return input.value; // if empty then falsy or vice-versa
    })


    if (isInputBoxFilled) {


      // var completedTasks = numOfT + 1; 
      // var widthPercentage = (completedTasks / 3) * 100;


      // barValue.style.width = widthPercentage + '%';

      // numberOfTask.innerHTML = completedTasks + '/3 Completed';

      //toggling class Completed
      
      checkbox.parentElement.classList.toggle("completed")
      error.style.visibility = 'hidden';
    }
    else {
      error.style.visibility = 'visible';
    }
  })
});



//removing error as user started entering goal


inputboxes.forEach((input) => {

  input.addEventListener('focus', () => {
    error.style.visibility = 'hidden';
  })

})


