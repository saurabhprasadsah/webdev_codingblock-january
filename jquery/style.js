// window.onload = function(){

// }
//console.log($('list'))

$(()=>{
    $('#prepand').click(() =>{
        let text = $('#item').val()
        $('#list').prepand($(`<li>`).html((`<b>${text}</b>`))

    })




})