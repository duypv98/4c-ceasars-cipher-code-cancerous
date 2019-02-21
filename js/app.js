const theKey = document.getElementById('shift-key');
const inputText = document.getElementById('input-text');
const result = document.getElementById('result-text');
const format = document.getElementById('format-text');
const eodChoice = document.getElementById('choice');

function UpdateShiftKey(val){
    theKey.value = val;
}
function GetCode(){
    let eod = eodChoice.value;
    if (eod == 'encode'){
        Encode();
    }
    else{
        Decode();    }
}

function Encode(){
    const shiftKey = parseInt(theKey.value);
    const txt = inputText.value;
    let x = [];
    
    for (let i = 0; i < txt.length; i++){
        x[i] = txt.charCodeAt(i) + shiftKey;
        if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90){
            if (x[i] >= 65 && x[i] <= 90){
                x[i] = x[i];
            }
            else if (x[i] > 90){
                x[i] -= 26;
            }
            else if (x[i] < 65){
                x[i] += 26;
            }
        }
        if (txt.charCodeAt(i) == 32 || txt.charCodeAt(i) < 65 || txt.charCodeAt(i) > 122 
        || (txt.charCodeAt(i) >= 91 && txt.charCodeAt(i) <= 96)){
            x[i] = txt.charCodeAt(i);
        }
        if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122){
            if (x[i] >= 97 && x[i] <= 122){
                x[i] = x[i];
            }
            else if (x[i] > 122){
                x[i] -= 26;
            }
            else if (x[i] < 97){
                x[i] += 26;
            }
        }
    }
    let _res = String.fromCharCode.apply(null,x);
    result.value = _res;
    format.innerHTML = 'Normal';
}

function Decode(){
    let shiftKey = parseInt(theKey.value);
    shiftKey *= -1;
    let txt = inputText.value;
    
    let x = [];
    
    for (let i = 0; i < txt.length; i++){
        x[i] = txt.charCodeAt(i) + shiftKey;
        if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90){
            if (x[i] >= 65 && x[i] <= 90){
                x[i] = x[i];
            }
            else if (x[i] > 90){
                x[i] -= 26;
            }
            else if (x[i] < 65){
                x[i] += 26;
            }
        }
        if (txt.charCodeAt(i) == 32 || txt.charCodeAt(i) < 65 || txt.charCodeAt(i) > 122 
        || (txt.charCodeAt(i) >= 91 && txt.charCodeAt(i) <= 96)){
            x[i] = txt.charCodeAt(i);
        }
        if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122){
            if (x[i] >= 97 && x[i] <= 122){
                x[i] = x[i];
            }
            else if (x[i] > 122){
                x[i] -= 26;
            }
            else if (x[i] < 97){
                x[i] += 26;
            }
        }
    }
    let _res = String.fromCharCode.apply(null,x);
    result.value = _res;
    format.innerHTML = 'Normal';
}

function Cancerous(){
    let tmp = result.value;
    result.value = Change(tmp);
    format.innerHTML = 'Cancerous';
}

function Change(str){
    let cancerousStr = str.toLowerCase().split('');
    for (let i = 0; i < cancerousStr.length; i++){
        if (i % 2 != 0){
            cancerousStr[i] = cancerousStr[i].toUpperCase();
        }
    }
    return cancerousStr.join('');
}