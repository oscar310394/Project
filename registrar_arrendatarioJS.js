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

		//se carga informacion del usuario a modificar
		var idUserToUpdate = JSON.parse(sessionStorage.getItem("idUserToUpdate"));
		if (idUserToUpdate != null && idUserToUpdate != undefined){
			var user;
			var arrayUser = JSON.parse(localStorage.getItem("user"));
			for (var index = 0; index < arrayUser.length; index++) {
				if (arrayUser[index].id === idUserToUpdate) {
					user = arrayUser[index];
					break;
				}
			}
			document.getElementById("apartamento").value = user.apartment;
			document.getElementById("nombre").value = user.name;
			document.getElementById("apellido").value = user.lastname;
			document.getElementById("email").value = user.email;
			document.getElementById("tel").value = user.phone;

			document.getElementById("btnRegister").value = "Modificar";
			document.getElementById("titRegister").innerHTML = "Modificar Arrendatario";
		}
	});