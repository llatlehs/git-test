function GetData() {
    var place = document.getElementById("place").value;
    var name = document.getElementById("name").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;

    document.getElementById("sentence").innerHTML = sentence(verb, adverb, name, place, adj);
}
function sentence(verb, adverb, name, place, adj) {
    sentenceArry = [
        `Today I had to ${verb} ${adverb}. But right in the middle of it, ${name} came with this ${adj} book and wanted to go to ${place}.`, `${name} was in ${place} trying to ${verb}. However, ${name} left a ${adj} shirt behind, while crying ${adverb}.`, `It's been a long time since ${name} decided to ${verb} in ${place}.`
    ]

    ranN = Math.floor(Math.random() * sentenceArry.length)
    return sentenceArry[ranN]
}
console.log(sentence())




var a = [1, 2, 4, 9] = [
    {
        word: "dog",
        hint: "Mans best friend."
    }
    {
        word: "home",
        hint: "somewhere you live or feel safe at.."
    }
    {
        word: "girlfriend",
        hint: "someone you love and care about. (NOT MARRIED)"
    }
    {
        word: "computer",
        hint: "powers the new age."
    }
]
console.log(arr[1].hint)
 