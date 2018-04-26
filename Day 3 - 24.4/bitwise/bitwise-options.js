var options = [
    'hummus', //1
    'hamutzim', //2
    'salat', //4
    'chips' //8
];

var bitwiseOptions = {};

function buildOptions() {
    for (var i=0; i<options.length; i++){
        bitwiseOptions[options[i]] = 1 << i;
    }
}

function is(obj, option) {
    const optionValue = bitwiseOptions[option]
    return (obj & optionValue) > 0
}

function set(obj, option) {
    const optionValue = bitwiseOptions[option]
    return obj | optionValue
}

function unset(obj, option) {
    const optionValue = bitwiseOptions[option]
    return obj & ~optionValue
}

function setUnset(obj, option) {
    const optionValue = bitwiseOptions[option]
    return obj ^ optionValue
}

var pita = 1;

buildOptions();
bitwiseOptions
let answer

answer = is(pita, 'hummus')
answer
answer = is(pita, 'salat')
answer

pita = set(pita, 'hummus')
pita
pita = set(pita, 'chips')
pita

pita = unset(pita, 'hummus')
pita
pita = unset(pita, 'salat')
pita

pita = setUnset(pita, 'hummus')
pita
pita = setUnset(pita, 'hummus')
pita