function saveAdmi() {

    var getAdmiArrayLocal = JSON.parse(localStorage.getItem("administrator"));


    var idAdmi = getLastId("administrator");
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
            "password": passAdmi
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
    var getUserArray = JSON.parse(localStorage.getItem("user"));
    var getGuardArray = JSON.parse(localStorage.getItem("guard"));
    var combo = document.getElementById("combobox");
    var valueCombo = combo.options[combo.selectedIndex].value;
    var administrator = "administrator";
    var guard = "guard";
    var user = "user";
    var contador = 0;

    if (valueCombo === administrator) {
        if (getAdmiArray === null) {
            alert("No tiene privilegios de Administrador.");
        } else {

            for (var index = 0; index < getAdmiArray.length; index++) {
                var admiEmail = getAdmiArray[index].email;
                var admiPass = getAdmiArray[index].password;
                if (email === admiEmail && password === admiPass) {
                    userLogueado(getAdmiArray[index]);
                    location.href = "nav_usuario.html";
                    contador = 1;
                    return;
                }
            }
            if (contador == 0) {
                alert("Credenciales incorrectos.");
            }
        }
    }
    if (valueCombo === guard) {
        if (getGuardArray === null) {
            alert("No tiene privilegios de Guarda.");
        } else {
            for (var index = 0; index < getGuardArray.length; index++) {
                var guardEmail = getGuardArray[index].email;
                var guardPass = getGuardArray[index].password;
                if (email === guardEmail && password === guardPass) {
                    userLogueado(getGuardArray[index]);
                    location.href = "guard_window.html";
                    contador = 1;
                }
            }
            if (contador == 0) {
                alert("Credenciales incorrectos.");
            }
        }
    }
    if (valueCombo === user) {
        if (getUserArray === null) {
            alert("No tiene privilegios de Usuario.");
        } else {
            for (var index = 0; index < getUserArray.length; index++) {
                var userEmail = getUserArray[index].email;
                var userPass = getUserArray[index].password;
                if (email === userEmail && password === userPass) {
                    userLogueado(getUserArray[index]);
                    location.href = "user_window.html";
                    contador = 1;
                }
            }
            if (contador == 0) {
                alert("Credenciales incorrectos.");
            }
        }
    }
}

function saveUser() {
    var idUserToUpdate = JSON.parse(sessionStorage.getItem("idUserToUpdate"));
    if (idUserToUpdate != null && idUserToUpdate != undefined) {
        //modificamos usuario
        updateUser1(idUserToUpdate);
    } else {
        saveUser1();
    }
}


function updateUser1(idUser) {
    var passUser = document.getElementById("password").value;
    var passUserConf = document.getElementById("password_confirmation").value;
    var passConfi = samePass(passUser, passUserConf);
    if (passConfi === true) {
        var arrayUser = JSON.parse(localStorage.getItem("user"));
        for (var index = 0; index < arrayUser.length; index++) {
            if (arrayUser[index].id === idUser) {
                arrayUser[index].apartment = document.getElementById("apartamento").value;
                arrayUser[index].name = document.getElementById("nombre").value;
                arrayUser[index].lastname = document.getElementById("apellido").value;
                arrayUser[index].email = document.getElementById("email").value;
                arrayUser[index].phone = document.getElementById("tel").value;
                arrayUser[index].password = passUser;
                break;
            }
        }

        localStorage.setItem("user", JSON.stringify(arrayUser));
        sessionStorage.removeItem("idUserToUpdate");
        location.href = "lista_arrendatarios.html";
    }
}


function saveUser1() {
    var idAdmiLogIn = 0;
    var getUserArrayLocal = JSON.parse(localStorage.getItem("user"));
    var getAdmiLogIn = JSON.parse(sessionStorage.getItem("logIn"));

    idAdmiLogIn = getAdmiLogIn.id;
    var idUser = getLastId("user");
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
            "idAdmi": idAdmiLogIn,
            "id": idUser,
            "apartment": apartmentUser,
            "name": nameUser,
            "lastname": lastnameUser,
            "email": emailUser,
            "phone": telUser,
            "password": passUser,
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
    var idGuardToUpdate = JSON.parse(sessionStorage.getItem("idGuardToUpdate"));
    if (idGuardToUpdate != null && idGuardToUpdate != undefined) {
        //modificamos usuario
        updateGuard1(idGuardToUpdate);
    } else {
        saveGuard1();
    }
}


function saveGuard1() {
    var idAdmiLogIn = 0;
    var getGuardArrayLocal = JSON.parse(localStorage.getItem("guard"));
    var getAdmiLogIn = JSON.parse(sessionStorage.getItem("logIn"));

    idAdmiLogIn = getAdmiLogIn.id;
    var idGuard = getLastId("guard");
    var nameGuard = document.getElementById("nombre").value;
    var lastnameGuard = document.getElementById("apellido").value;
    var emailGuard = document.getElementById("email").value;
    var telGuard = document.getElementById("tel").value;
    var passGuard = document.getElementById("password").value;
    var passGuardConf = document.getElementById("password_confirmation").value;

    var passConfi = samePass(passGuard, passGuardConf);
    if (passConfi === true) {
        var jsonGuard = {
            "idAdmi": idAdmiLogIn,
            "id": idGuard,
            "name": nameGuard,
            "lastname": lastnameGuard,
            "email": emailGuard,
            "phone": telGuard,
            "password": passGuard,
        };

        if (getGuardArrayLocal === null) {
            var guardArray = [];
            guardArray.push(jsonGuard);
            localStorage.setItem("guard", JSON.stringify(guardArray));
            alert("Se guardó con éxito.");
            cleanFields();
        } else {
            getGuardArrayLocal.push(jsonGuard);
            localStorage.setItem("guard", JSON.stringify(getGuardArrayLocal));
            alert("Se guardó con éxito.");
            cleanFields();
        }
    }
}

function updateGuard1(idGuard) {
    var passGuard = document.getElementById("password").value;
    var passGuardConf = document.getElementById("password_confirmation").value;
    var passConfi = samePass(passGuard, passGuardConf);
    if (passConfi === true) {
        var arrayGuard = JSON.parse(localStorage.getItem("guard"));
        for (var index = 0; index < arrayGuard.length; index++) {
            if (arrayGuard[index].id === idGuard) {
                arrayGuard[index].name = document.getElementById("nombre").value;
                arrayGuard[index].lastname = document.getElementById("apellido").value;
                arrayGuard[index].email = document.getElementById("email").value;
                arrayGuard[index].phone = document.getElementById("tel").value;
                arrayGuard[index].password = passGuard;
                break;
            }
        }

        localStorage.setItem("guard", JSON.stringify(arrayGuard));
        sessionStorage.removeItem("idGuardToUpdate");
        location.href = "lista_guardas.html";
    }
}



function getLastId(tableLocalStorage) {
    var ret = 1;
    var array = JSON.parse(localStorage.getItem(tableLocalStorage));
    if (array != null && array != undefined && array.length > 0) {
        ret = array[array.length - 1].id + 1;
    }
    return ret;
}

function userLogueado(user) {
    var userLog = {
        "userLog": user
    }
    sessionStorage.setItem("logIn", JSON.stringify(user));
}


function closeLogIn(){
    sessionStorage.removeItem("logIn");
    location.href = "inicio.html";
}

function deleteUpdate(){
    sessionStorage.removeItem("idUserToUpdate");
    sessionStorage.removeItem("idGuardToUpdate");
}



