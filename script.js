const createbtn=document.querySelector('#submit');
createbtn.addEventListener('click',()=>{
    const inputs=document.querySelectorAll('input');
    inputs.forEach(input=>{
        input.classList.add('filled');
    })
})

let validated=false;

function validate(event){
    const pass1=document.querySelector('input#pwd');
    const pass2=document.querySelector('input#cfmpwd');
    if(pass1.value!=pass2.value){
        document.querySelector('.passcheck').textContent='* Passwords don\'t match';
        pass1.value=''; pass2.value='';
        event.preventDefault();
    }
    else{
        document.querySelector('.passcheck').textContent='';
        validated=true;
    }
}