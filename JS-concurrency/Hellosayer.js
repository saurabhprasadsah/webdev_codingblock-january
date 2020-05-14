function hellosayer(times,name){
    let count = 0
    let loopId = setInterval(()=>{
        count++
        console.log('Hello'+name)
        if (count == times){
            clearInterval(loopId)
        }
        while(true){

        }
    }, 100)
}

hellosayer(3,'saurabh')
hellosayer(5,'Manish')
