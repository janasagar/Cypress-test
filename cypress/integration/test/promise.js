let promise = new Promise((resolve,rejet)=>{
    let a = 1+4
    if(a==5){
        resolve('Promise is ahived')
    } else{
        reject('Promise is rejected')
    }
})
promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)

})