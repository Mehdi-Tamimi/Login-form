
document.getElementById('Name').addEventListener('change', (event) => {
    const name = event.target.value
    function nameIsValid(value) {
        const char = value.charCodeAt(0)
        return ((char>= 97)&&(char <= 122)) || ((char >= 65) && (char <= 90))
    }
    if ((name).length > 15) {
        if (!(document.getElementById('errName1'))) {
            const err = document.createElement('div')
            err.setAttribute('class','err')
            err.setAttribute('id' ,'errName1')
            err.innerText = 'Name must be less than 15 characters'
            document.getElementById('Name').after(err)
            document.getElementById('Name').style.border = '1px solid red'
        }
        
    }
    else {
        if (document.getElementById('errName1')) {
            document.getElementById('errName1').remove()
            document.getElementById('Name').style.border ='1px solid gray'
            }
        if (!(name.split('').every(nameIsValid))) {
            if (!(document.getElementById('errName2'))) {
                const err = document.createElement('div')
                err.setAttribute('class','err')
                err.setAttribute('id' ,'errName2')
                err.innerText = 'only letter'
                document.getElementById('Name').after(err)
                document.getElementById('Name').style.border = '1px solid red'
            }
        }
        else {
            if (document.getElementById('errName2')) {
                document.getElementById('errName2').remove()
                document.getElementById('Name').style.border ='1px solid gray'
            }
        }
            
    
        
    }
})
document.getElementById('Email').addEventListener('change', (event) => {

    const Email = event.target.value
    const EmailSlice = Email.split('@')
    
    if (EmailSlice[EmailSlice.length-1] != 'gmail.com') {
        if (!(document.getElementById('errEmail'))) {
            const err = document.createElement('div')
            err.setAttribute('class','err')
            err.setAttribute('id' ,'errEmail')
            err.innerText = 'Enter a valid Email'
            document.getElementById('Email').after(err)
            document.getElementById('Email').style.border = '1px solid red'
        }
    }
    else {
        if (document.getElementById('errEmail')) {
            document.getElementById('errEmail').remove()
            document.getElementById('Email').style.border ='1px solid gray'
        }

    }
})

document.getElementById('Password').addEventListener('change', (event) => {
    const password = event.target.value
    const passwordList = password.split('')
    function passwordIsValid(value) {
        return (value.charCodeAt(0) >= 48) && (value.charCodeAt(0) <= 57)
    }
    if (((password).length < 8) ) {
        if (!(document.getElementById('errPass1'))) {
            const err = document.createElement('div')
            err.setAttribute('class','err')
            err.setAttribute('id' ,'errPass1')
            err.innerText = 'Password must be at least 8 characters'
            document.getElementById('Password').after(err)
            document.getElementById('Password').style.border = '1px solid red'

        }
        if (document.getElementById('errPass2')) {
            document.getElementById('errPass2').remove()
            document.getElementById('Password').style.border ='1px solid gray'

        }
           
        
    }
    else {
        if (document.getElementById('errPass1')) {
        document.getElementById('errPass1').remove()
        document.getElementById('Password').style.border ='1px solid gray'
        }
        if ((password.toUpperCase() === password)||(password.toLowerCase() === password)||(!(passwordList.some(passwordIsValid)))) {
            if (!(document.getElementById('errPass2'))) {
                const err = document.createElement('div')
                err.setAttribute('class','err')
                err.setAttribute('id' ,'errPass2')
                err.innerText = 'Password must include Uppercase and Lowercase letters and Number'
                document.getElementById('Password').after(err)
                document.getElementById('Password').style.border = '1px solid red'
            }
        }
        else {
            if (document.getElementById('errPass2')) {
                document.getElementById('errPass2').remove()
                document.getElementById('Password').style.border ='1px solid gray'
            }
        }
    }
})