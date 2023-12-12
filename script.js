const item = document.getElementById("item");
const toDo=document.getElementById("to-do");
item.addEventListener('keyup',
function(e){
    if(e.key=="Enter")
    {
     addTODo(this.value)
     this.value="";
    }
});

const addTODo=function(item)
{
    const listOfItem=document.createElement("li");
    listOfItem.innerHTML=`${item}
    <i class="fas fa-times"></li>
    `
    listOfItem.addEventListener('click',
    function()
    {
       this.classList.toggle("workDone"); 
    })
    listOfItem.querySelector("i").addEventListener('click',
    function()
    {
        listOfItem.remove();
    })
    toDo.appendChild(listOfItem);
}
