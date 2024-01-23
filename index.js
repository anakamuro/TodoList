const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const ul = document.querySelector('ul');


button.addEventListener("click", ()=> {
    let li = document.createElement('li');
    li.className = "list";
    li.innerHTML =   input.value;
    let span = document.createElement('span');
    span.className = "delete";
    span.innerHTML = 'X';
    let span2 = document.createElement('span');
    // span2.className = "edit";
    // span2.innerHTML = 'Edit';
    li.appendChild(span);
    // li.appendChild(span2);
    ul.appendChild(li);
    document.querySelector('.delete').addEventListener("click", (e)=> {
     e.target.parentElement.remove()
    })

    // document.querySelector('.edit').addEventListener("click", (e)=> {
    //     let list = document.querySelector('.list');

    //     list.style.backgroundColor = "green";
    //     list.style.color = "white";
    //     let tempEle = list.lastElementChild;
    //     const editInput = document.createElement("input");
    //     editInput.value = tempEle.innerText;
    //     tempEle.innerText = "";
    //     list.appendChild(editInput);
    //     list.focus();
    //     list.addEventListener("blur", function(){
    //         list.innerText = editInput.value;
    //         list.style.backgroundColor = "white";
    //     })
    //    })
       ul.appendChild(li);
})

 
