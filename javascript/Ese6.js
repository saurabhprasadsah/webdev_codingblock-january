// function fakedownload (done) {
//     setTimeout (function (){
//     let downloadedData = "some data will be rapped of the interwebs"
//     done (downloadedData)



//     }, 1000)
// }
// fakedownload(function(data){
//     console.log("which downloaded the file from this data --->")
//     console.log(data)
// })

function fakedownloadPromise(){
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            let downloadedData=" some data is downloaded from net"
            resolve (downloadedData)

        },1000)
    })
}
fakedownloadPromise(). then(function (data){
    console.log("the data is downloaded form --->")
    console.log(data)

})