let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passbox=document.getElementById("passbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyicon=document.getElementById("copyicon");


sliderValue.textContent= inputSlider.value;
inputSlider.addEventListener('input',() => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passbox.value=generatePassword();
})

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allnumbers="123456789";
let allSymbols="@#$%^&*?-_";
 
function generatePassword(){
    let genpassword="";
    let allChars="";
    allChars+=lowercase.checked ? lowerChars : "";
    allChars+=uppercase.checked ? upperChars : "";
    allChars+=numbers.checked ? allnumbers: "";
    allChars+=symbols.checked ? allSymbols : "";
    let i=0;
    while(i<=inputSlider.value)
    {

        genpassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genpassword;
}
copyicon.addEventListener('click',()=>{
    if(passbox.value!="" || passbox.value.length>=1)
    {

        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText="check";
        copyicon.title="Password Copied";
        setTimeout(()=>{
          copyicon.innerHTML="content_copy";
          copyicon.title="";
        },3000);
    }
})