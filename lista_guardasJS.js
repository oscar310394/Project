function charge() {
    getGuard();
}
charge();

function htmlbodyHeightUpdate(){
    var height3 = $( window ).height()
    var height1 = $('.nav').height()+50
    height2 = $('.main').height()
    if(height2 > height3){
        $('html').height(Math.max(height1,height3,height2)+10);
        $('body').height(Math.max(height1,height3,height2)+10);
    }
    else
    {
        $('html').height(Math.max(height1,height3,height2));
        $('body').height(Math.max(height1,height3,height2));
    }
    
}
$(document).ready(function () {
    htmlbodyHeightUpdate()
    $( window ).resize(function() {
        htmlbodyHeightUpdate()
    });
    $( window ).scroll(function() {
        height2 = $('.main').height()
          htmlbodyHeightUpdate()
    });
});

function getGuard() {

    var userLog = JSON.parse(sessionStorage.getItem("logIn"));
    var idUserLog = userLog.id;
    var arrayGuard = JSON.parse(localStorage.getItem("guard"));

    for (var index = 0; index < arrayGuard.length; index++) {
        if(arrayGuard[index].idAdmi === idUserLog){
            var table = document.getElementById("guards_table");
            if (table != null) {
                table.innerHTML = null;
                tableGuard(arrayGuard[index]);
            }
        }
    }
}


function tableGuard(usuario) {
    var table = document.getElementById("guards_table");
    var row = "<tr><td>" + usuario.name + "</td><td>" + usuario.lastname + "</td><td>" + usuario.email + "</td><td>" + usuario.phone + "</td><td>" + usuario.password + "</td>" +
    "<td class='sizeButt'><input type='button' class='btn btn-success' value='Editar' onclick='openUpdateGuard("+usuario.id+")'></td>"+ 
    "<td class='sizeButt'><input type='button' class='btn btn-danger' value='Eliminar' onclick='deleteGuard("+usuario.id+")'></td></tr>";
    table.innerHTML = table.innerHTML + row;
}


function deleteGuard(guardId){
    var arrayGuard = JSON.parse(localStorage.getItem("guard"));
    for (var index = 0; index < arrayGuard.length; index++) {
        if (arrayGuard[index].id === guardId) {
            arrayGuard.splice(index,1);
            break;
        }
    }
    localStorage.setItem("guard", JSON.stringify(arrayGuard));
    getUser();
}

function openUpdateGuard(idGuard){
    sessionStorage.setItem("idGuardToUpdate", JSON.stringify(idGuard));
    location.href = "agregar_guarda.html";
}