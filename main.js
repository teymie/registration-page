const btn = document.getElementById('btn');
const par = document.querySelectorAll('.name')

var inputFields = document.querySelectorAll('.field')

var fname = document.getElementById('firstname')
var lname = document.getElementById('lastname')
var pass = document.getElementById('password')
var mail = document.getElementById('email')

btn.addEventListener('click' ,function (e) {
   
        if (fname.value =='') {
        document.getElementById('err1').style.visibility = 'visible'
        fname.classList.add('field')
        fname.classList.remove('no-background')
        
        }
        
   
    fname.addEventListener('click', function () {
        document.getElementById('err1').style.visibility = 'hidden'  
        fname.classList.remove('field')
    })
    if (lname.value =='') {
        document.getElementById('err2').style.visibility = 'visible'
        lname.classList.add('field')
        lname.classList.remove('no-background')
        }
        
   
    lname.addEventListener('click', function () {
        document.getElementById('err2').style.visibility = 'hidden'
        lname.classList.remove('field')  
    })
    if (pass.value =='') {
        document.getElementById('err4').style.visibility = 'visible'
        pass.classList.add('field')
        pass.classList.remove('no-background')
        }
        
   
    pass.addEventListener('click', function () {
        document.getElementById('err4').style.visibility = 'hidden' 
        pass.classList.remove('field') 
    })
    if (mail.value =='') {
        document.getElementById('err3').style.visibility = 'visible'
        mail.classList.add('field')
        mail.classList.remove('no-background')
        }
        
   
    mail.addEventListener('click', function () {
        document.getElementById('err3').style.visibility = 'hidden' 
        mail.classList.remove('field') 
    })
   
    
    
})
