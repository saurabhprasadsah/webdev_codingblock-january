let ultasks = $('#ultasks')
let btnAdd = $('btnAdd')
let btnclear = $('#btnclear')
let InputNewtasks = $('#InputNewtasks')



btnAdd.click(() =>{
    console.log(InputNewtasks.val())
    InputNewtasks.val("")
})