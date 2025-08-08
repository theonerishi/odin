function camelize(word) {
    let words = word.split('-');
    console.log(words)
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        console.log(words[i])
    }
    word = words.join('');
    console.log(word);
    return word;
}
console.log(camelize('background-color'));