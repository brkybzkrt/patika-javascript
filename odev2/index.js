const list =document.querySelector('#list');
const button = document.querySelector('#liveToastBtn');
const input = document.querySelector('#task');



const newElement=()=>{
    if(input.value.length>0){
        let li = document.createElement('li');
        list.appendChild(li);
        li.innerHTML=input.value;

        let span= document.createElement('span');
        span.classList.add("btn","btn-danger","float-right");
        
        span.onclick=deleteItem;
        span.innerHTML="sil";
        li.appendChild(span)
       
        
        input.value="";
      
    }

}

const deleteItem=()=>{
    event.target.parentElement.remove();
    }
    

button.addEventListener('click',newElement);
