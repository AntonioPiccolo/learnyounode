babySteps(process.argv);

function babySteps(array){
    var sum = 0;
    var lunghezzaArray = array.length;
    
    for(var i = 2; i < lunghezzaArray; i++){
        sum = sum + parseInt(array[i]);
    }

    console.log(sum);
}