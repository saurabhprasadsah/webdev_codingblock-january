window.onload = function(){
    let num = document.getElementById('num')
    let list = document.getElementById('list')
    let print = document.getElementById('print')


    print.onclick = function(){
      //let start = new.Date().gettime()

        let N = parseInt(num.value)
        for (let i =1; i<N;i++){
            //list.innerHTML += '<l>' + i +   '</l>'

            let item =document.createElement('li')
            item.innerText= i
            list.appendChild(iteam)
        }
        //console.log(new Date().getTime  - start)

    }

 
}