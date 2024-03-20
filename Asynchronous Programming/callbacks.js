function sum(a,b){
    console.log(a+b);
}

function Calculator(a,b,func){
    func(a,b);
}

Calculator(78,22,sum);

// callback-hell -- not easy to understand

function getData(dataId,getNextdata){
    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextdata){
            getData();
        }
    }, 2000)
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        });
    });
});