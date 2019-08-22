const theKey = document.getElementById('shift-key');
const inputText = document.getElementById('input-text');
const resultText = document.getElementById('result-text');
const format = document.getElementById('format-text');
const eodChoice = document.getElementById('choice');
const key = document.getElementById('key');
const modal = document.getElementById('notice-modal');
const closeBtn = document.getElementById('close-btn');

function updateShiftKey(val) {
    theKey.value = val;
}
function getCode() {
    if (inputText.value == null || !inputText.value) {
        modal.style.display = "block";
        return;
    }
    let eod = eodChoice.value;
    if (eod == 'encode') {
        encode();
    }
    else {
        decode();
    }
    format.setAttribute('style', 'color: green;');
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onkeydown = (event) => {
    if (event.keyCode == 27) {
        modal.style.display = "none";
    }
}

function encode() {
    const shiftKey = parseInt(theKey.value);
    const txt = inputText.value;
    let x = [];

    for (let i = 0; i < txt.length; i++) {
        x[i] = txt.charCodeAt(i) + shiftKey;
        if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) {
            if (x[i] >= 65 && x[i] <= 90) {
                x[i] = x[i];
            }
            else if (x[i] > 90) {
                x[i] -= 26;
            }
            else if (x[i] < 65) {
                x[i] += 26;
            }
        }
        if (txt.charCodeAt(i) == 32 || txt.charCodeAt(i) < 65 || txt.charCodeAt(i) > 122
            || (txt.charCodeAt(i) >= 91 && txt.charCodeAt(i) <= 96)) {
            x[i] = txt.charCodeAt(i);
        }
        if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) {
            if (x[i] >= 97 && x[i] <= 122) {
                x[i] = x[i];
            }
            else if (x[i] > 122) {
                x[i] -= 26;
            }
            else if (x[i] < 97) {
                x[i] += 26;
            }
        }
    }
    let _res = String.fromCharCode.apply(null, x);
    resultText.value = _res;
    format.innerHTML = 'Normal';
}

function decode() {
    let shiftKey = parseInt(theKey.value);
    shiftKey *= -1;
    let txt = inputText.value;

    let x = [];

    for (let i = 0; i < txt.length; i++) {
        x[i] = txt.charCodeAt(i) + shiftKey;
        if (txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90) {
            if (x[i] >= 65 && x[i] <= 90) {
                x[i] = x[i];
            }
            else if (x[i] > 90) {
                x[i] -= 26;
            }
            else if (x[i] < 65) {
                x[i] += 26;
            }
        }
        if (txt.charCodeAt(i) == 32 || txt.charCodeAt(i) < 65 || txt.charCodeAt(i) > 122
            || (txt.charCodeAt(i) >= 91 && txt.charCodeAt(i) <= 96)) {
            x[i] = txt.charCodeAt(i);
        }
        if (txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122) {
            if (x[i] >= 97 && x[i] <= 122) {
                x[i] = x[i];
            }
            else if (x[i] > 122) {
                x[i] -= 26;
            }
            else if (x[i] < 97) {
                x[i] += 26;
            }
        }
    }
    let _res = String.fromCharCode.apply(null, x);
    resultText.value = _res;
    format.innerHTML = 'Normal';
}

function cancerous() {
    if (inputText.value == null || !inputText.value) {
        modal.style.display = "block";
        return;
    }
    let tmp = resultText.value;
    resultText.value = change(tmp);
    format.innerHTML = 'Cancerous';
    format.setAttribute('style', 'color: red;');
}

function change(str) {
    let cancerousStr = str.toLowerCase().split('');
    for (let i = 0; i < cancerousStr.length; i++) {
        if (i % 2 != 0) {
            cancerousStr[i] = cancerousStr[i].toUpperCase();
        }
    }
    return cancerousStr.join('');
}

function resetValue() {
    inputText.value = "";
    resultText.value = "";
    theKey.value = 0;
    key.value = 0;
}