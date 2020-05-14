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

hellosayer(3,'saurabh')
hellosayer(5,'Manish')
