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

	//se carga informacion del guarda a modificar
	var idGuardToUpdate = JSON.parse(sessionStorage.getItem("idGuardToUpdate"));
	if (idGuardToUpdate != null && idGuardToUpdate != undefined) {
		var guard;
		var arrayGuard = JSON.parse(localStorage.getItem("guard"));
		for (var index = 0; index < arrayGuard.length; index++) {
			if (arrayGuard[index].id === idGuardToUpdate) {
				guard = arrayGuard[index];
				break;
			}
		}

		document.getElementById("nombre").value = guard.name;
		document.getElementById("apellido").value = guard.lastname;
		document.getElementById("email").value = guard.email;
		document.getElementById("tel").value = guard.phone;

		document.getElementById("btnRegister").value = "Modificar";
		document.getElementById("titRegister").innerHTML = "Modificar Guarda";
	}

});