const sections=document.getElementsByTagName('section');

for (const section of sections){
    section.style.border= "2px solid blue";
    section.style.margin="20px";
    section.style.padding="20px";
    section.style.borderRadius="12px";
    
    // section.style.borderRadius="10px";
}

const places=document.getElementById('places');
places.classList.add("bgYellow");
places.classList.add("text-large");
places.classList.remove("text-large");