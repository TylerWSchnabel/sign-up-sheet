var pass = document.getElementById('pass');
var conf = document.getElementById('conf');
var error = document.getElementById('error');
let sub = document.getElementById('submit');
var good = true
function validate(){
    if (pass.value != conf.value){
        error.textContent = "Passwords don't match";
        pass.className = "unmatch";
        conf.className = "unmatch";
        sub.disabled = true;
    } else {
        error.textContent = "";
        pass.className = "box";
        conf.className = "box";
        sub.disabled = false;
    }
}

pass.addEventListener('keyup', function(){
    if (conf.value.length != 0){
        validate();
    }
})

conf.addEventListener('keyup', validate);
