let ultasks = $('#ultasks')
let btnAdd = $('btnAdd')
let btnclear = $('#btnclear')
let InputNewtasks = $('#InputNewtasks')


InputNewtasks.keypress((e)=>{
    console.log(e.which)
})



btnAdd.click(() =>{
    
    let listItem=  $('<li>',{
        'class':'list-group-item',
         text:inpNEWTask.val()               
    })
    listItem.click(()=>{
        $(this).toggleClass('disabled')
    })

     
    ultasks.append(lastItem)
    inpNEWTask.val('')
})



btnclear.click(() =>InputNewtasks.val(''))
    ////hello