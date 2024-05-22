// "use strict"
var varA = 'varA';
const constA = 'constA';

{
    var varA = 'block_varA';
    let constA = 'block_constA';

    function log() {
        var varA = "log_varA";
        console.log(varA, constA);
    }
};

log()