

function solution(str) {
    var str2 = "";
    for (var i = str.length -1  ; i >= 0 ; i--){     
        str2 = str2 + str[i] ;
        
    }
    return str2;
}

console.log (solution('safwan'))