function end(){
    console.log("process is completed");
}

function calCube(num,f){
    const result = num*num*num
    console.log(result);
    f();
}

calCube(5,end)