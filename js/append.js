const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='New section about adding create element';
const ul=document.createElement('ul');

const li1=document.createElement('li');
li1.innerText="const section=document.createElement('section');";
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText="const h1=document.createElement('h1')";
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText="h1.innerText='New section about adding create element';";
ul.appendChild(li3);

const li4=document.createElement('li');
li4.innerText="const ul=document.createElement('ul');";
ul.appendChild(li4);

const li5=document.createElement('li');
li5.innerText="const li5=document.createElement('li');";
ul.appendChild(li5);

const li6=document.createElement('li');
li6.innerText="li6.innerText='anything want to add in li'";
ul.appendChild(li6);

const li7=document.createElement('li');
li7.innerText="ul.appendChild(li7);";
ul.appendChild(li7);

section.appendChild(h1);
section.appendChild(ul);

const mainContainer=document.getElementById('main-container');
mainContainer.appendChild(section);

const sectionAppendShortcut=document.createElement('section');
sectionAppendShortcut.innerHTML=`
<h2>Normal List</h2>
            <ul>
                <li class="normal-List">const sectionAppendShortcut=document.createElement('section');</li>
                <li class="normal-List">sectionAppendShortcut.innerHTML="<h2>Normal List</h2>
                <ul>
                    <li class="normal-List">list1</li>
                    <li class="normal-List">list2</li>
                </ul>"</li>
                <li class="normal-List">mainContainer.appendChild(sectionAppendShortcut);</li>
            </ul>
`
mainContainer.appendChild(sectionAppendShortcut);