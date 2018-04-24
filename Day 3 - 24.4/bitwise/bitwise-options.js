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

    // option to set and unset:
    // return obj ^ optionValue
}

var pita = 1;

buildOptions();
let answer = is(pita, 'hummus')
answer = is(pita, 'salat')

pita = set(pita, 'hummus')
pita = set(pita, 'chips')
