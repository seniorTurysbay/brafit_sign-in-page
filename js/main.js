window.addEventListener("DOMContentLoaded",function (){
    let preReg= document.querySelector(".signup_right_pre-reg");
    let postReg = document.querySelector(".signup_right_post-reg");
    let regBtn = document.getElementById("btn");


    let getForm = document.getElementById("register-form");

    function handleform(event){
        event.preventDefault()
    }
    getForm.addEventListener("submit",handleform)



    regBtn.addEventListener("click",function(e){
        preReg.classList.remove('active')
        preReg.classList.add('hide-temp');
        postReg.classList.remove('hide-temp');
        postReg.classList.add('active')

        let getMail = document.getElementById("email").value;
        let setMail = document.querySelector(".mail");

        setMail.innerHTML = `${getMail}`

    });
})


function success(){
    if(document.getElementById("email").value==="") {
        document.getElementById('btn').disabled = true;
    } else {
        document.getElementById('btn').disabled = false;
    }
}
