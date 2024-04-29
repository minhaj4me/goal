//checkboxes
const checkboxes = document.querySelectorAll(".custom-checkbox");
//inputboxes
const inputboxes = document.querySelectorAll(".goal-input");
const quote = document.querySelector(".pBeforeBar");
const footQuote = document.querySelector(".motivatesLine")
//error line
const error = document.querySelector(".pAfterBar");

let barValue = document.querySelector(".barValue")

const allQuotes = [
  'Raise the bar by completing your goals!',
  'Well begun is half done!',
  'Just a step away keep going!',
  'Whoa! You just completed all goals, time for chill :D'
]

const footQuotes = [
  '"Move one step ahead, today!"',
  '"Keep Going, You are making great progress!"',
  '"Keep Going, You are making great progress!"',
  '"Voila! You Did it"'

]








// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {

//   first:{
//     name:'',
//     completed:false,
//   },
//   second:{
//     name:'',
//     completed:false,
//   },
//   third:{
//     name:'',
//     completed:false,
//   }

// }

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}

let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length

barValue.style.width = (completedGoalsCount / inputboxes.length) * 100 + '%'
barValue.firstElementChild.innerText = `${completedGoalsCount}/${inputboxes.length} completed`
quote.innerText = allQuotes[completedGoalsCount]
footQuote.innerText = footQuotes[completedGoalsCount]




checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", () => {
    const isInputBoxFilled = [...inputboxes].every((input) => {
      return input.value; // if empty then falsy or vice-versa
    })


    if (isInputBoxFilled) {

      checkbox.parentElement.classList.toggle("completed")
      error.style.visibility = 'hidden';

      const inputId = checkbox.nextElementSibling.id
      allGoals[inputId].completed = !allGoals[inputId].completed

      completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length

      barValue.style.width = (completedGoalsCount / inputboxes.length) * 100 + '%'
      barValue.firstElementChild.innerText = `${completedGoalsCount}/${inputboxes.length} completed`


      quote.innerText = allQuotes[completedGoalsCount]
      footQuote.innerText = footQuotes[completedGoalsCount]




      localStorage.setItem('allGoals', JSON.stringify(allGoals))

    }
    else {
      error.style.visibility = 'visible';
    }
  })
});



//removing error as user started entering goal


inputboxes.forEach((input) => {

  if(allGoals[input.id]){
    input.value = allGoals[input.id].name;

    if (allGoals[input.id].completed) {
      input.parentElement.classList.add('completed')
  
    }
  }



  input.addEventListener('focus', () => {
    error.style.visibility = 'hidden';
  })


  input.addEventListener("input", (e) => {
    if (allGoals[input.id] && allGoals[input.id].completed) {
      input.value = allGoals[input.id].name
      return
    }

    if(allGoals[input.id]){
      allGoals[input.id].name= input.value
    }
    else{
      allGoals[input.id]={
        name:'',
        completed:false
      }
    }

    localStorage.setItem('allGoals', JSON.stringify(allGoals))
  })

})


