exports.translate = function(word) {
    let addPig='ay'
    // addPig.push('ay')
    // console.log(addPig)
    wordSplit = word.split(' ')
    vowels = 'aeiou'
    answerString = ''
    // console.log(wordSplit)
    i = 0
    console.log(wordSplit)
    if (vowels.includes(wordSplit[0][0])){
        wordSplit[0]+= addPig
        answerString += wordSplit[0]
    }
    // console.log(wordSplit.length)
    for(arr = 0; arr < wordSplit.length; arr++){
        // console.log(wordSplit[arr].length)
        let sliceString= ''
        for(letter =0; letter < wordSplit[arr].length; letter++) {
            // console.log(letter)
            console.log(vowels.includes(wordSplit[arr][letter]))
            if(vowels.includes(wordSplit[arr][letter]) === false){
                // console.log(wordSplit[letter])
                sliceString = wordSplit[arr].slice(0,letter+1)
            } else pass
        }console.log(sliceString)
        //console.log(wordSplit)
    }
};
