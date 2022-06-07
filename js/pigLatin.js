exports.translate = function(word) {
    let addPig='ay'
    // addPig.push('ay')
    // console.log(addPig)
    wordSplit = word.split(' ')
    vowels = 'aeiou'
    answerString = ''
    // console.log(wordSplit)
    i = 0

    if (vowels.includes(wordSplit[0][0])){
        wordSplit[0]+= addPig
        answerString += wordSplit[0]
        
    console.log(wordSplit.length)
    for(arr = 0; arr < wordSplit.length; arr++){
        console.log("not going into loop..")
        let sliceString= ''
        for(letter =0; letter <= wordSplit[arr].lenght; letter++) {
            
            console.log(wordSplit[arr][letter])
            if(vowels.includes[wordSplit[arr][letter]]){
                console.log(wordSplit[arr], letter)
                sliceString = wordSplit[arr].slice(0,letter)
                console.log(sliceString)
            }
        }
        }//console.log(wordSplit)
    }
};
