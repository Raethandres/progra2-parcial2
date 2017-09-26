<?php
if($_POST)
{

$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$cedula=$_POST['cedula'];
$asignatura=$_POST['asignatura'];
$codigo=$_POST['codigo'];
$unicredito=$_POST['unicredito'];


if(preg_match("/^[a-zA-Z]+$/",$nombre)){
	if(preg_match("/^[a-zA-Z]+$/",$apellido)){
		if(preg_match("/^[0-9]+$/",$cedula)){
			if(preg_match("/^[a-zA-Z]+$/",$asignatura)){
				if(preg_match("/^[0-9]+$/",$codigo)){
					if(preg_match("/^[0-9]+$/",$unicredito)){
						echo "true";
					}else{
						echo "fail uni";
					}
				}else{
						echo "fail co";
					}
			}else{
						echo "fail asi";
					}
		}else{
						echo "fail ced";
					}
	}else{
						echo "fail ape";
					}
}else{
						echo "fail nom";
					}


}else{
	$nombre="andres";
	if(preg_match("/^[a-zA-Z]+$/",$nombre)==1){
		echo "si g";
	}else{
		echo "no g";
	}
}


?>