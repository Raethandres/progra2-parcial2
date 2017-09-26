<?php
if($_POST)
{
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];

if(ereg("/[^a-zA-Z]+$/",$nombre)){
	if(ereg("/[^a-zA-Z]+$/",$apellido)){
		if(ereg("/[^a-zA-Z]+$/",$cedula)){
			if(ereg("/[^a-zA-Z]+$/",$asignatura)){
				if(ereg("/[^a-zA-Z]+$/",$codigo)){
					if(ereg("/[^a-zA-Z]+$/",$unicredito)){
						echo "true";
					}else{
						echo "fail";
					}
				}else{
						echo "fail";
					}
			}else{
						echo "fail";
					}
		}else{
						echo "fail";
					}
	}else{
						echo "fail";
					}
}else{
						echo "fail";
					}


}


?>