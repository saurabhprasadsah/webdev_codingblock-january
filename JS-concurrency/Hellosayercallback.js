function hellosayer(times,name,doneSaying){
    let count = 0
    let loopId = setInterval(()=>{
        count++
        console.log('Hello'+name)
        if (count == times){
            clearInterval(loopId)
            doneSaying()
        }

    }, 100)
}

hellosayer(3,'saurabh'  ()=>{

    hellosayer(5,'Manish'()=>{

        hellosayer(5,'Manish'()=>{


        })
    })

})

module.exports = {
    hellosayer
}



