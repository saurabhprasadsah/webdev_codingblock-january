function fakedownload (done) {
    setTimeout (function (){
    let downloadedData = "some data will be rapped of the interwebs"
    done (downloadedData)



    }, 1000)
}
fakedownload(function(data){
    console.log("which downloaded the file from this data --->")
    console.log(data)
})

