const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const arr = tutorials.map(function(title){
    let newtitle = ""
    for (let i=0; i < title.length; i++){
      if (title[i-1] === " "  || i === 0){
        newtitle += title[i].toUpperCase()
      }
      else {
        newtitle +=title[i]
      }
    }
    return newtitle
  })
  return arr
}

console.log(titleCased())