function linkSuccess(response){
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>loaded successfully</h1>`)
}



function linkFailure(error){
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>loaded successfully</h1>`)
}


axios.request({
   url: `https://picsum.photos/200/300`
}).then().catch()