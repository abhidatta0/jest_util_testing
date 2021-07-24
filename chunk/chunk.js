const chunkArray = (arr, len) => {
  const chunkedArray = [];

  arr.forEach(val =>{
    const last = chunkedArray[chunkedArray.length-1];

    if(last && last.length !== len){
      last.push(val);
    }
    else{
      chunkedArray.push([val]);
    }
  })
  return chunkedArray;
}

module.exports = chunkArray;
