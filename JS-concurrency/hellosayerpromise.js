function hellosayer(times,name){
    return new Promise((resolve, reject)=>{
        let count = 0
        let loopId = setInterval(()=>{
            count++
            console.log('Hello'+ name )
    
            if (count == times){
                clearInterval(loopId)
                resolve()
            }
        }, 100)

    })
   
}

hellosayer(3,'ARNAV')
   .then(()=>{
    hellosayer(2,'ARNAV')
    .then(()=>{
        hellosayer(3,'pratik')
    })

   })



module.exports={
    hellosayer
}   



