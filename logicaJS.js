function charge(){
    getUser();
    getGuard();
}
charge();


function saveAdmi() {

    var getAdmiArrayLocal = JSON.parse(localStorage.getItem("administrator"));

    var id = 1;
    if (getAdmiArrayLocal != null && getAdmiArrayLocal != undefined) {
        id = getAdmiArrayLocal.length + 1;
    }
    var idAdmi = id;
    var nameAdmi = document.getElementById("nombre").value;
    var lastnameAdmi = document.getElementById("apellido").value;
    var emailAdmi = document.getElementById("email").value;
    var telAdmi = document.getElementById("tel").value;
    var passAdmi = document.getElementById("password").value;
    var passAdmiConfi = document.getElementById("password_confirmation").value;

    var passConfi = samePass(passAdmi, passAdmiConfi);
    if (passConfi === true) {
        var jsonAdmi = {
            "id": idAdmi,
            "name": nameAdmi,
            "lastname": lastnameAdmi,
            "email": emailAdmi,
            "phone": telAdmi,
            "password": passAdmi,
            "privileges": true
        };

        if (getAdmiArrayLocal === null) {
            var admiArray = [];
            admiArray.push(jsonAdmi);
            localStorage.setItem("administrator", JSON.stringify(admiArray));
            alert("Se guardó con éxito.");
            cleanFields();
        } else {
            getAdmiArrayLocal.push(jsonAdmi);
            localStorage.setItem("administrator", JSON.stringify(getAdmiArrayLocal));
            alert("Se guardó con éxito.");
            cleanFields();
        }
    }
}

function samePass(pass1, pass2) {
    if (pass1 != pass2) {
        alert("Las contraseñas no coinciden.");
        return false;
    }
    return true;
}

function cleanFields() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password_confirmation").value = "";
}


function confirmationOfLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var getAdmiArray = JSON.parse(localStorage.getItem("administrator"));

    for (var index = 0; index < getAdmiArray.length; index++) {
        var userEmail = getAdmiArray[index].email;
        var userPass = getAdmiArray[index].password;
        var userPrivileges = getAdmiArray[index].privileges;
        if (email === userEmail && password === userPass) {
            if (userPrivileges) {
                location.href = "nav_usuario.html";
            } else {
                location.href = "user_window.html";  //QUE ABRA LA PANTALLA DE USUARIO NO LA DE ADMINISTRADOR
            }
        } else {
            alert("Datos digitados inválidos.");
        }
        //break;
    }
}

function saveUser() {

    var getUserArrayLocal = JSON.parse(localStorage.getItem("user"));
    var getUserArrayStorage = JSON.parse(sessionStorage.getItem("user"));
    var id = 1;
    if (getUserArrayLocal != null && getUserArrayLocal != undefined) {
        id = getUserArrayLocal.length + 1;
    }

    var idUser = id;
    var apartmentUser = document.getElementById("apartamento").value;
    var nameUser = document.getElementById("nombre").value;
    var lastnameUser = document.getElementById("apellido").value;
    var emailUser = document.getElementById("email").value;
    var telUser = document.getElementById("tel").value;
    var passUser = document.getElementById("password").value;
    var passUserConf = document.getElementById("password_confirmation").value;

    var passConfi = samePass(passUser, passUserConf);
    if (passConfi === true) {
        var jsonUser = {
            "id": id,
            "apartment": apartmentUser,
            "name": nameUser,
            "lastname": lastnameUser,
            "email": emailUser,
            "phone": telUser,
            "password": passUser,
            "privileges": false
        };

        if (getUserArrayLocal === null) {
            var userArray = [];
            userArray.push(jsonUser);
            localStorage.setItem("user", JSON.stringify(userArray));
            alert("Se guardó con éxito.");
            document.getElementById("apartamento").value = "";
            cleanFields();
        } else {
            getUserArrayLocal.push(jsonUser);
            localStorage.setItem("user", JSON.stringify(getUserArrayLocal));
            alert("Se guardó con éxito.");
            document.getElementById("apartamento").value = "";
            cleanFields();
        }
    }
}


function saveGuard() {

    var getGuardArrayLocal = JSON.parse(localStorage.getItem("guard"));
    var getGuardArrayStorage = JSON.parse(sessionStorage.getItem("guard"));
    var id = 1;
    if (getGuardArrayLocal != null && getGuardArrayLocal != undefined) {
        id = getGuardArrayLocal.length + 1;
    }

    var idGuard = id;
    var nameGuard = document.getElementById("nombre").value;
    var lastnameGuard = document.getElementById("apellido").value;
    var emailGuard = document.getElementById("email").value;
    var telGuard = document.getElementById("tel").value;
    var passGuard = document.getElementById("password").value;
    var passGuardConf = document.getElementById("password_confirmation").value;

    var passConfi = samePass(passGuard, passGuardConf);
    if (passConfi === true) {
        var jsonUser = {
            "id": id,
            "name": nameGuard,
            "lastname": lastnameGuard,
            "email": emailGuard,
            "phone": telGuard,
            "password": passGuard,
            "privileges": false
        };

        if (getGuardArrayLocal === null) {
            var userArray = [];
            userArray.push(jsonUser);
            localStorage.setItem("guard", JSON.stringify(userArray));
            alert("Se guardó con éxito.");
            cleanFields();
        } else {
            getGuardArrayLocal.push(jsonUser);
            localStorage.setItem("guard", JSON.stringify(getGuardArrayLocal));
            alert("Se guardó con éxito.");
            cleanFields();
        }
    }
}



function getUser() {
    var arrayUser = [];
    if (localStorage.getItem("user")) {
        arrayUser = JSON.parse(localStorage.getItem("user"));
    }
    var table = document.getElementById("users_table");
    if (table != null) {
        table.innerHTML = null;
    }
    arrayUser.forEach(function (usuario, index, arrayUser) {
            tableUser(usuario)
    });
}

function tableUser(usuarios) {
    var table = document.getElementById("users_table");
    var row = "<tr><td>" + usuarios.apartment + "</td><td>" + usuarios.name + "</td><td>" + usuarios.lastname + "</td><td>" + usuarios.email + "</td><td>" + usuarios.phone + "</td><td>" + usuarios.password + "</td></tr>";
    table.innerHTML = table.innerHTML + row;
}


function getGuard() {
    var arrayGuard = [];
    if (localStorage.getItem("guard")) {
        arrayGuard = JSON.parse(localStorage.getItem("guard"));
    }
    var table = document.getElementById("guards_table");
    if (table != null) {
        table.innerHTML = null;
    }
    arrayGuard.forEach(function (usuario, index, arrayGuard) {
            tableGuard(usuario)
    });
}


function tableGuard(usuarios) {
    var table = document.getElementById("guards_table");
    var row = "<tr><td>" + usuarios.name + "</td><td>" + usuarios.lastname + "</td><td>" + usuarios.email + "</td><td>" + usuarios.phone + "</td><td>" + usuarios.password + "</td></tr>";
    table.innerHTML = table.innerHTML + row;
}