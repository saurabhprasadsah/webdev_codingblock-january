function hellosayer(times,name){
    return new Promise((resolve, reject)=>{
        let count = 0
        let loopId = setInterval(()=>{
            count++
            console.log('Hello ' +   name )
    
            if (count == times){
                clearInterval(loopId)
                resolve()
            }
        }, 100)

    })
   
}
// async function task() {
//    await hellosayer(3,'saurabh')
//    await hellosayer(2,'raju')
//    await hellosayer(3,'manish')


// }


// task()
// hellosayer(2,'jyoti')

async function task()
{
    await promise.all([
        hellosayer(3,'saurabh')
        hellosayer(2,'raju')
        hellosayer(4,'manish')

    ])
    


   console.log("-----js concurrency over-----")


    await promise.all([
    hellosayer(5,'jyoti')
    hellosayer(1,'juhi')
    hellosayer(6,'kunal')
    ])
}
task()









module.exports ={
   hellosayer
}