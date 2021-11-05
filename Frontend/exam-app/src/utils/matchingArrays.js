const matchArrays = (a, b) => {
    
    let correctCounter = 0; 

    a.forEach((el, index)=>{
        if (el === b[index]) {
            correctCounter++;
        }
    });

    let correctPercentage = (correctCounter / a.length) * 100;
    return correctPercentage;

}




export default matchArrays;

