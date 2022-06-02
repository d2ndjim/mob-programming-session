function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    const remove = arr.shift();
    arr.push(remove);
  }
  return arr;
}
