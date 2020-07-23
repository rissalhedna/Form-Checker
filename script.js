const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input,message){
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${input.id} is required`)
        }else{
            showSuccess(input)
        }
    })
}

form.addEventListener('submit',function(e){
    e.preventDefault()

    checkRequired([username,email,password,password2])
    checkLength(username,3,15)
    checkLength(password,3,15)
    checkEmail(email)
    checkPasswordsMatch(password,password2)
})


function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${input.id} must be at least ${min} characters`)
    }else if(input.value.length>max){
        showError(input,`${input.id} must be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(input.value)){
        showSuccess(input)
    }else{
        showError(input,'Email is not valid')
    }
}

function checkPasswordsMatch(input1,input2){
    if(input1.value === input2.value){
        showSuccess(input2)
    }else{
        showError(input2,'Passwords do not match')
    }
}