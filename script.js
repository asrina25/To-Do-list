 //selecting item
  var input_box=document.getElementById("input_box")
var btn=document.getElementById("btn")
var list=document.getElementById("list")
var btn_del=document.getElementById("btn_del")

//event listener for adding task
btn.addEventListener("click",function(){
    var li=document.createElement("li")
    li.className = "mb-2 "
        li.innerHTML=input_box.value +"<button onclick='delete_item(event)' class=' ml-4 border border-black rounded-xl  text-center  bg-pink-700 text-white p-1 hover:bg-black'>Delete</button>"
   list.append(li)
   
 
})
function delete_item(event){
 event.target.parentElement.remove()
}



