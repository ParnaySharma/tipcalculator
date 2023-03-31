


function answer(){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;

    let x = parseInt(a);
    let y = parseInt(b);
    let z = (x * y/100) + x;
     document.getElementById('fourth').value = z;
    let d = a * b/100;
    document.getElementById('thired').value = d;
}



function clear(){
    document.getElementById('first').value = " ";
}