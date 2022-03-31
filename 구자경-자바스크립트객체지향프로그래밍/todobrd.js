//form
const todoInput =document.querySelector("#todo_form")

//button
const todoList =document.querySelector("#todo_list")
const todoText =document.querySelector("#todo_txt")
const todoButton =document.querySelector("#todo_bt")

//todo button function
todoButton.addEventListener("click", todoAddButton)

//투두버튼 펑션
function todoAddButton(){
    const checkbox =document.createElement("input");
    checkbox.type ="checkbox";
    checkbox.addEventListener("click", todoCheck);

    const li =document.createElement("li");

    const text =document.createTextNode(todoText.value);

    const button =document.createElement("button");
    button.textContent ="X";
    button.addEventListener("click", todoDelete);

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    todoList.appendChild(li);
    
    todoInput.value="";
}

Count="0";
const count =document.textContent(`${Count}`)

function todoCheck(event){
    const checkbox =event.target;
    if(checkbox.checked){
        checkbox.parentNode.style.color="lightgray";
        Count++;
        console.log(Count);
    }
    else{
        checkbox.parentNode.style.color="black";
        Count--;
        console.log(Count);
    }
}

function todoDelete(event){
    event.target.parentNode.remove();
}

