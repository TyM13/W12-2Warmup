// function clickbutton (details) {
// axios.request({
//    url: `https://picsum.photos/200/300`
// }).then(linkSuccess).catch(linkFailure)
// }


// function linkSuccess(response){
//     document.body.insertAdjacentHTML(`afterbegin`, `<section>

//     <img src="${response[`request`][`responseURL`]}">
    
//         </section>`)
    
// }



// function linkFailure(error){
//     document.body.insertAdjacentHTML(`afterbegin`, `<h1>Error</h1>`)
// }


// let button_one = document.getElementById(`button_one`)
// button_one.addEventListener(`click`, clickbutton)





function clickbuttontwo (details) {
    axios.request({
       url: `https://picsum.photos/200/300`
    }).then(linkSuccesstwo).catch(linkFailuretwo)
    }
    
    
    function linkSuccesstwo(response){
        document.body.insertAdjacentHTML(`afterbegin`, `<section>
        
        <img src="${response[`request`][`responseURL`]}">
        
            </section>`)
        
    }
    
    
    
    function linkFailuretwo(error){
        document.body.insertAdjacentHTML(`afterbegin`, `<h1>Error</h1>`)
    }
    
    
    let button_two = document.getElementById(`button_two`)
    button_two.addEventListener(`click`, clickbuttontwo)