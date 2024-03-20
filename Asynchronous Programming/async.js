function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve("success");
        },2000)
    })
}

async function hello(){
    await getdata();
    console.log("hello");
}