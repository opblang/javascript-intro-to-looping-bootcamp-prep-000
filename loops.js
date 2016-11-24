var forLoop = xs => {
  let str = `I am ${i} strange loop${i === 0 ? ''  : 's' }`
  for(var i=0; i < 25; i++)
    xs.push(str)
  return xs
}

var whileLoop = x => {
  while( x > 0) {
    console.log(x)
    x--
  }
  return 'done'
}

var doWhileLoop = xs => {
  while(true) {
    break
  }
  return []
}
