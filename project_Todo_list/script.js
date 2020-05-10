let ultasks = $('#ultasks')
let btnAdd = $('btnAdd')
let btnclear = $('#btnclear')
let InputNewtasks = $('#InputNewtasks')



btnAdd.click(() =>{
    
    let listItem=  $('<li>',{
        'class':'list-group-item'
         text:inpNEWTask.val()               
    })
    ultasks.append(lastItem)
    inpNEWTask.val('')
})



btnclear.click(() =>InputNewtasks.val(''))
    