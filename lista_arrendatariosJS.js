
function charge() {
    getUser();
}
charge();

function htmlbodyHeightUpdate() {
    var height3 = $(window).height()
    var height1 = $('.nav').height() + 50
    height2 = $('.main').height()
    if (height2 > height3) {
        $('html').height(Math.max(height1, height3, height2) + 10);
        $('body').height(Math.max(height1, height3, height2) + 10);
    }
    else {
        $('html').height(Math.max(height1, height3, height2));
        $('body').height(Math.max(height1, height3, height2));
    }

}
$(document).ready(function () {
    htmlbodyHeightUpdate()
    $(window).resize(function () {
        htmlbodyHeightUpdate()
    });
    $(window).scroll(function () {
        height2 = $('.main').height()
        htmlbodyHeightUpdate()
    });
});




function getUser() {
    var userLog = JSON.parse(sessionStorage.getItem("logIn"));
    var idUserLog = userLog.id;
    var arrayUser = JSON.parse(localStorage.getItem("user"));
    var table = document.getElementById("users_table");
    table.innerHTML = null;
    for (var index = 0; index < arrayUser.length; index++) {
        if (arrayUser[index].idAdmi === idUserLog) {
            
            if (table != null) {
                tableUser(arrayUser[index]);
            }
        }
    }
}

function tableUser(usuario) {
    var table = document.getElementById("users_table");
    var row =   "<tr><td>" + usuario.apartment + "</td><td>" + usuario.name + "</td><td>" + usuario.lastname + "</td><td>" + usuario.email + "</td><td>" + usuario.phone + "</td><td>" + usuario.password + "</td>"+
                "<td class='sizeButt'><input type='button' class='btn btn-success' value='Editar' onclick='openUpdateUser("+usuario.id+")'></td>"+
                "<td class='sizeButt'><input type='button' class='btn btn-danger' value='Eliminar' onclick='deleteUser("+usuario.id+")'></td></tr>";
    table.innerHTML = table.innerHTML + row;
}

function deleteUser(userId){
    var arrayUser = JSON.parse(localStorage.getItem("user"));
    for (var index = 0; index < arrayUser.length; index++) {
        if (arrayUser[index].id === userId) {
            arrayUser.splice(index,1);
            break;
        }
    }
    localStorage.setItem("user", JSON.stringify(arrayUser));
    getUser();
}

function openUpdateUser(idUser){
    sessionStorage.setItem("idUserToUpdate", JSON.stringify(idUser));
    location.href = "registrar_arrendatario.html";
}


