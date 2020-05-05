window.onload = function(){
    let newtask= document.getElementById('newtask')
    let newtask= document.getElementById('addtask')
    let newtask= document.getElementById('todolist')


    addtask.onclick = function(){
        let li = document.createElement('li')
        li.innerText = newtask.Value
        todolist.appendlist(li)





    }

}