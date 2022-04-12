const cl = thing => console.log(thing)

/*Were supposed to make sure a string has no repeat letters, likes try to use index of 
which is more like intsanse of */

word = `helloworld`

function UniqLetters(word) {
    let newWord = []
    for(let i = 0; i < word.length;i++){
        
        
        
        if(word.indexOf(word[i]) === i){newWord.push(word[i])
        }
        


    }
newWord.join('')
cl(newWord.join(''))
return newWord.join('')


}
UniqLetters(word)