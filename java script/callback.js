function listen(PORT,callback){
    if(PORT>0 && PORT<=65535){
        callback()
    }
    else{
        console.log("error");
    }

}

const PORT = 5000;

listen(PORT,()=>{
    console.log(`server is started port ${PORT}`);
})