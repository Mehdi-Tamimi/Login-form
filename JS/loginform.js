

const Lower = 'abcdefghijklmnopqrstuvwxyz'
const Upper = Lower.toUpperCase()
const Numbers = '0123456789'

isUpper = false
isLower = false
isNumber = false


document.getElementById('Name').addEventListener('change', (event) => {
    const name = event.target.value
    isLetter = false
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
        for (let i = 0; name.length > i; i++) {
            if (!((((name.charCodeAt(i)) >= 97)&&((name.charCodeAt(i)) <= 122)) || (((name.charCodeAt(i)) >= 65) && ((name.charCodeAt(i)) <= 90)))) {
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
    }
})
document.getElementById('Email').addEventListener('change', () => {
    
})

document.getElementById('Password').addEventListener('change', (event) => {
    const password = event.target.value
    const list = password.split('')
    if (((password).length < 8) ) {
        if (!(document.getElementById('err'))) {
            const err = document.createElement('div')
            err.setAttribute('class','err')
            err.setAttribute('id' ,'errPass1')
            err.innerText = 'Password must be at least 8 characters'
            document.getElementById('Password').after(err)
            document.getElementById('Password').style.border = '1px solid red'

        }
        
        if (document.getElementById('errPass2')) {
            (document.getElementById('errPass2')).remove()
        }
           
        
    }
    else {
        if (document.getElementById('errPass1')) {
        document.getElementById('errPass1').remove()
        document.getElementById('Password').style.border ='1px solid gray'
        }
        if ((password.toUpperCase() === password)||(password.toLowerCase() === password)) {
            if (!(document.getElementById('errPass2'))) {
                const err = document.createElement('div')
                err.setAttribute('class','err')
                err.setAttribute('id' ,'errPass2')
                err.innerText = 'Password must include Uppercase and Lowercase letters'
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
    if (!(list.some((value) => {
        return (value.charCodeAt(0) >= 48) && (value.charCodeAt(0) <= 57)
        }))) {
        if (!(document.getElementById('errPass3'))) {
            const err = document.createElement('div')
            err.setAttribute('class','err')
            err.setAttribute('id' ,'errPass3')
            err.innerText = 'Password must include Number'
            document.getElementById('Password').after(err)
            document.getElementById('Password').style.border = '1px solid red'
        }
    
    }
    else {
        if (document.getElementById('errPass3')) {
            document.getElementById('errPass3').remove()
            document.getElementById('Password').style.border ='1px solid gray'
        }
    }
})

document.getElementById('btn').addEventListener('click', () => {

})