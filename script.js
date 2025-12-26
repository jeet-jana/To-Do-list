let input = document.querySelector("#task");
let ul = document.querySelector("#list");

function addTask(){
    let tex = input.value;
    if(tex === ""){
        return;
    }
    let list = document.createElement("li");
    list.innerText = tex;
    ul.appendChild(list);

    let btn = document.createElement("button");
    list.appendChild(btn);
    btn.innerText = "Delete";
    btn.addEventListener("click", function (){
        btn.parentElement.remove();
    });
}
function clearLil(){
    ul.innerHTML = "";
    input.value = "";
}

