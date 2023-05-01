let keyboard = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 44, 46, 47, 39, 92, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 91, 93, 59, 100, 102, 103, 104, 106,
107, 108, 122, 120, 99, 118, 98, 110, 109, 112];


function init() {
let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        if (i == 15 || i == 30) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="k-key" >' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('#virtual-keyboard').innerHTML = out;
}

init();
    document.keypress = function (event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
        element.classList.remove('active');
    });    
    document.querySelector('#virtual-keyboard .k-key[data="' + event.keyCode + '"]').classList.add('active');
}

document.querySelectorAll('#virtual-keyboard .k-key').forEach(function (element) {
    element.onclick = function (event) {
    document.querySelectorAll('#virtual-keyboard .k-key').forEach(function (element) {
            element.classList.remove('active');
        });            
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
        
    }})
