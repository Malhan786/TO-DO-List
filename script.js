let input =document.getElementById("input");
let listContainer =document.getElementById("listContainer");

function addtask(){
    if(input.value===''){
        alert("YOU MUST ADD TASK!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    input.value="";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);