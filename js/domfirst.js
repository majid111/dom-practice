const tagsName=document.getElementsByTagName("li");
for(const list of tagsName){
    // console.log(list.innerText);
}
const normalList=document.getElementsByClassName("normal-List");
for(const list of normalList){
    console.log(list.innerText);
}

normalList[3].innerText="List 4 -Name changed by js";
normalList[0].style.color='blue';

const mango =document.getElementById("mango");

// console.log(mango.innerText);
const normalListQuery= document.querySelector('.normal-List');
// console.log(normalListQuery.innerText);

const normalListQueryAll =document.querySelectorAll('.normal-List');
// console.log(normalListQueryAll);
mango.style.color='red';
const banana= document.getElementById('banana');
banana.style.backgroundColor="purple";
banana.style.color="white";

const lichi=document.getElementById('lichi');
console.log(lichi.getAttribute("class"));
console.log(lichi.classList);
lichi.classList.add('English-khata');
lichi.classList.add('bangla-khata');
console.log(lichi.classList);
lichi.classList.remove('bangla-khata');
lichi.classList.replace('English-khata', "math-khata");

console.log(lichi.classList);
const fruitsSection=document.getElementById('fruit-section');

console.log(fruitsSection.innerHTML);

// fruitsSection.innerHTML="<h3>heading changed by js</h3>"
