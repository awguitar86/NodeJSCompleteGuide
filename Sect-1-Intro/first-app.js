function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  console.log(chunked)
}

chunk([1,2,3,4,5,6,7,8,9,10], 4);