let nextButton = document.querySelector('button#next')
let backButton = document.querySelector('button#back')
let nextBackDiv = document.querySelector('#back-next')

let forms = document.querySelectorAll('form.form')
let steps = document.querySelectorAll('div.step')

let stepIndex = 0
let maxSteps = 4

function verifyData(){
    let userName = document.querySelector('input#name')
    let userEmail = document.querySelector('input#email')
    let userPhoneNumber = document.querySelector('input#phone')
    let userData = [userName.value, userEmail.value, userPhoneNumber.value]
    return userData.includes('')

}

nextButton.addEventListener('click',()=>{
    forms[stepIndex].classList.remove('selected')
    steps[stepIndex].classList.remove('selected')
    if (!verifyData()){
        stepIndex ++
    }else{
        window.alert('Please fill in all the data')
        
    }
    changeStep()
})

backButton.addEventListener('click',()=>{
    forms[stepIndex].classList.remove('selected')
    steps[stepIndex].classList.remove('selected')
    stepIndex --
    changeStep()
})

function changeStep(){
    if (stepIndex > 0){
        backButton.style.display = 'block'
    }else{
        backButton.style.display = 'none'
    }

    if (stepIndex >= maxSteps-1){
        nextButton.innerHTML = 'Confirm'
        confirmEverything()
    }

    else{
        nextButton.innerHTML = 'Next Step'
    }

    if (stepIndex == maxSteps){
        nextBackDiv.style.display = 'none'
    }

    forms[stepIndex].classList.add('selected')
    if (stepIndex < maxSteps){
        steps[stepIndex].classList.add('selected')
    }

}

