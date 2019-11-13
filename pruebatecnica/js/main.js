// comentario de linea
/*
comentario 
de 
bloque*/

/**
 * javadoc
 */
//alert('Los alert estan opsoletos');
 console.trace('Esto es una traza de log');
 console.info('para informar de cosas');

 var a = 2;
 console.debug('la variable a vale '+a);
 /*Los dos mensajes que escribiremos a continuacion son de Warning y Error.
 Los dejaremos comentados por que cada vez que carguemos la pagina nos darian aviso de warning y de error.*/
 //console.warn('houston tenemos un problema');
 //console.error('Error en la conexion al servidor');

 function busarVoluntario(){
    var alunmos = ["Joseba","Raul", "Cristia","Alejandro","Iñigo", "Aitor","Ana","Adres",
                            "Endika","Erlantz","Iker","JuanCarlos","Kiryl","Maria","Mikel"];

    console.trace('click');
    
    //document.getElementById('nombre').innerHTML = alunmos[(Math.trunc(Math.random()*14))];
    //document.getElementById('nombre').style.color='red';
    do{
        nombreVoluntario = alunmos[(Math.trunc(Math.random()*(alunmos.length)))];
        if(nombreVoluntario!="Mikel"){
            document.getElementById('nombre').innerHTML = nombreVoluntario;
            document.getElementById('nombre').style.color='red';
        }
    }while(nombreVoluntario == "Mikel");
 }
 