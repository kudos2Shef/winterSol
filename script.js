
const source = [{id:1,src:'https://www.connollycove.com/wp-content/uploads/2024/03/image-279.jpeg'},
	{id:2,src:'https://img.freepik.com/free-photo/rustic-table-candlelight-indulgent-gourmet-autumn-feast-generated-by-ai_188544-13372.jpg?t=st=1735304961~exp=1735308561~hmac=47e52ced7cc65d8e178660bb8038d63a46914802f68aa0ed3d4ceebe531befaf&w=996'},
	{id:3,src:'https://images.pexels.com/photos/29930723/pexels-photo-29930723/free-photo-of-festive-christmas-wreath-on-glass-door.jpeg?auto=compress&cs=tinysrgb&w=600'},
	{id:4,src:'https://i.pinimg.com/736x/63/3e/64/633e6497138385b1ceb1e7fc400b1ecf.jpg'}
	];


const hemispheres = document.getElementById('hemispheres');
const science = document.getElementById('science');
let div = document.createElement('div');
const traditions = document.getElementById('traditions');
const l = traditions.querySelector('ul');
const a = l.childNodes[0];
const arr = l.children;


createNav();
createDiv();
createBr();
createImg();   

function createDiv(){
	science.appendChild(div);
}

function createBr()
{
for(let i=0;i<arr.length;i++){
	let temp = arr[i].childNodes[0];
	let temp1 = arr[i].childNodes[1];
	let para = document.createElement('p');
	arr[i].childNodes[0].innerHTML=`${temp.innerHTML} <br>`;		
    para.textContent = temp1.textContent;
    arr[i].replaceChild(para, temp1);
}
}



function createImg(){
    let val=0;
    for(let i=0;i<arr.length;i++){
        console.log(l.children[i]);
        let img = document.createElement('img');
                if(i!=2){
    
            img.src=source[val].src;
            img.height='320';
            img.width='560';
            arr[i].insertBefore(img,arr[i].firstChild);
            val++;
            if(i==0){
                img.style.borderRadius='10px 150px 30px 30px';
            }
            else if (i==1) {
                img.style.borderRadius='150px 10px 30px 30px';
    
            } else if(i==3) {
                img.style.borderRadius='150px 30px 30px 10px';
    
            } else if(i==4){
                img.style.borderRadius='30px 150px 10px 30px';
    
            }
    
    }
    }
}





function createNav(){
const intro = document.getElementById('introduction');
const mainNav = document.getElementById('main-nav');
const section = document.createElement('section');
section.appendChild(mainNav);
intro.parentNode.insertBefore(section,intro);
section.classList.add('nav');
// console.log('success');
}

