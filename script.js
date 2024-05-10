let display_output = document.getElementById("display_output");

function display(num){
    display_output.value += num;

}

let equal = document.getElementById("equal");
equal.addEventListener('click', function(){
    let display_output = document.getElementById('display_output').value;
    let result = eval(display_output);
    document.getElementById('display_output').value = result;
    
})

function display(value) {
    // Replace "x" and "÷" with "*" and "/"
    if (value === 'x') {
        value = '*';
    } else if (value === '÷') {
        value = '/';
    }
    document.getElementById('display_output').value += value;
}
