document.querySelector('#submit-btn').addEventListener('click',function(event){
    event.preventDefault()

    const email = document.getElementById('floatingEmail').value
    const phone = document.getElementById('floatingPhone').value
    const text = document.getElementById('floatingText').value
    const messege = document.getElementById('floatingTextarea').value

    if(!email || !phone || !text || !messege){
        alert("Please fill out the field")
        return
    }
    const formData = {
        email:email,
        phone:phone,
        text:text,
        messege:messege
    }

    localStorage.setItem('contactFormData',JSON.stringify(formData))

    if(localStorage.getItem){
        alert("Form Submitted")
    }else{
        alert("Error")
    }


    // clear the input field
    document.getElementById('floatingEmail').value = ""
    document.getElementById('floatingPhone').value = ""
    document.getElementById('floatingText').value = ""
    document.getElementById('floatingTextarea').value = ""
})