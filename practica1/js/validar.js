$(document).ready(function(){
    // console.log("aja");

    $("#id_cedula").focus(function(){
        Stop();
        // console.log(this);
        validar(this);
    });
    $("#id_nombre").focus(function(){
        Stop();
        // console.log(this);
        validar(this);
    });
    $("#id_apellido").focus(function(){
        Stop();
        // console.log(this);
        validar(this);
    });
    $("#id_asignatura").focus(function(){
        Stop();
        // console.log(this);
        validar(this);
    });
    $("#id_codigo").focus(function(){
        Stop();
        // console.log(this);
        validar(this);
    });
    $("#id_unicredito").focus(function(){
        Stop();
        // console.log(this);
        validar(this);
    });
    var t;
    function validar(ff){
        if(ff.id=="id_nombre"){
            var ok=$("#id_nombre").val();
             if (ok.search(/[^a-zA-Z]+/) === -1){
                $(".nom").css({display:"none"});
                boton(0);
            }else{
                $(".nom").css({display:"block"});
                boton(1);
            }
        }else if (ff.id=="id_apellido") {
            var ok=$("#id_apellido").val();
             if (ok.search(/[^a-zA-Z]+/) === -1){
                $(".ape").css({display:"none"});
                boton(0);
            }else{
                $(".ape").css({display:"block"});
                boton(1);
            }
        } else if (ff.id=="id_cedula") {

            var ok=$("#id_cedula").val();
            // console.log(ok.search(/^[0-9]+/))
             if (ok.search(/^[0-9]+/) == 0){
                $(".ci").css({display:"none"});
                boton(0);
            }else{
                $(".ci").css({display:"block"});
                boton(1);
            }
        } else if (ff.id=="id_asignatura") {
            var ok=$("#id_asignatura").val();
             if (ok.search(/[^a-zA-Z]+/) === -1){
                $(".asi").css({display:"none"});
                boton(0);
            }else{
                $(".asi").css({display:"block"});
                boton(1);
            }
        } else if (ff.id=="id_codigo") {
            var ok=$("#id_codigo").val();
             if (ok.search(/^[0-9]+/) === 0){
                $(".cod").css({display:"none"});
                boton(0);
            }else{
                $(".cod").css({display:"block"});
                boton(1);
            }
        } else if (ff.id=="id_unicredito") {
            var ok=$("#id_unicredito").val();
             if (ok.search(/^[0-9]+/) === 0){
                $(".uni").css({display:"none"});
                boton(0);
            }else{
                $(".uni").css({display:"block"});
                boton(1);
            }
        }      
        t=setTimeout(validar,500,ff);
    }

    function Stop(){
        clearTimeout(t);
    }
    function boton(s){
    	if (s) {
    		$("#p").css({display:"none"});
    	}else{
    		$("#p").css({display:"block"});
    	}
    	
    }
    var sh=125;
    $( window ).scroll(function() {
    	var scroll = $(window).scrollTop();
    	console.log(scroll.valueOf());
    	if(scroll.valueOf()>=sh){
    		$("section").css({opacity:"0.9"});
    	}else{
    		$("section").css({opacity:"0.5"});
    	}
  		
	

	});
    var htm="<div><h4 class='section-heading'>Aqui se le solicita informacion personal</h4></div><div class=''><div class='pa'><p class='hi'><label  class='nom'>Nombre: "+$("#id_nombre").val()+" </label></p><p class='hi'><label  class='ape'>Apellido: "+$("#id_apellido").val() +"</label></p><p class='hi'><label  class='ci'>Cedula: "+$("#c").val()+$("#id_cedula").val()+"</label></p><p class='pa'><label for='id_carrera'>Carrera: "+$("#id_carrera").val() +"</label></p></div></div><div><div><h4 class='section-heading'>informacion de la materia</h4></div><div class='pa'><p class='hi'><label  class='asi'>Asignatura: "+$("#id_asignatura").val() +"</label></p><p class='hi'><label  class='asi'>Codigo: "+$("#id_codigo").val() +"</label></p><p class='hi'><label  class='asi'>Unidad de Credito: "+$("#id_unicredito").val() +"</label></p><p class='hi'><label  class='ape'>Motivo: "+$("#id_motivo").val() +"</label></p></div></div>"
	$("#p").click(function() {
       
        $.ajax({
            type: 'post',
            url: 'form.php',
            data: $('form').serialize(),
            success: function (result) {
                if(result=="true"){
                  $("section").html(htm)
                    sh=0;
                }else{
                    alert("faild")
                 }
              
            }
          });

  		
	});
   


  //   $(document).mousemove(function(event){
    
  //   var pos =$("section").position();
  //   // console.log(pos.top);
  //   if(pos.top>=293.8333282470703){
  //       // console.log("aqui")
  //       $("section").css({opacity:"0.9"});
  //   }
  //    if(pos.top<293.8333282470703){
  //       // console.log("aqui")
  //       
  //   }
    

  // });
    
});