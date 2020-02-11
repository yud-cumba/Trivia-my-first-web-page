var correcta   = 0;
var incorrecta = 0;
var totIntentos   = 3; // máximo de intentos
var intentosRealizado   = 0; // contador de intentos

    function ButtonGo() { //funcion empezar
	    if (userName.value) { //si pone algo en  el rectángulo
	      let name = document.getElementById('userName'); // le entrega valor a name
        	document.getElementById('space').innerHTML =  ' ¡Hola, ' + name.value + '! <br> Esta trivia es para desafiar tus conocimientos contestando 3 preguntas.<br> Elige el tema de tu preferencia';// reemplaza eltexto anterior por este nuevo
          document.getElementById('buttonMathsOrthography').style.display = 'block';
          document.getElementById('login').style.display = 'none' ; // oculta el RECTAGULO BLANCO al poner nombre
          ocultar();
      }
    }
    function buttonMath() { //jugar matematica
          //Inicio de desaparecer
          document.getElementById('buttonMathsOrthography').style.display='none' //Fin de desaparecer
          document.getElementById('welcome').innerHTML ='<br>¡Escogiste la opción de matemática!';
          document.getElementById('space').innerHTML = 'Pregunta 1: ¿Cuánto es 2+3x4-5x(3-5)?';
          document.getElementById('buttonMathQuestion1').style.display = 'block';
          Limpiar();
    }
    function buttonVolverMath(){
          document.getElementById('volverJugarMate').style.display = 'block';
          MensajeResultado();
       if(intentosRealizado == totIntentos){
          document.getElementById('volverJugarMate').style.display = 'none';
        }
    }
          //* botones PREGUNTA 1
    function buttonMath1Op1() {
      //respuesta correcta
       document.getElementById('buttonMathQuestion1').style.display='none'; //fin desaparecer
       document.getElementById('space').innerHTML ='Pregunta 2: ¿Cuánto es la cuarta parte de la tercera parte de 1?';
       document.getElementById('buttonMathQuestion2').style.display = 'block';
       correcta++;
    }
    function buttonMath1Op2() {
       document.getElementById('buttonMathQuestion1').style.display='none'; //fin desaparecer
       document.getElementById('space').innerHTML ='Pregunta 2: ¿Cuánto es la cuarta parte de la tercera parte de 1?';
       document.getElementById('buttonMathQuestion2').style.display = 'block';
       incorrecta++;
    }
    function buttonMath1Op3() {
       document.getElementById('buttonMathQuestion1').style.display='none'; //fin desaparecer
       document.getElementById('space').innerHTML ='Pregunta 2: ¿Cuánto es la cuarta parte de la tercera parte de 1?';
       document.getElementById('buttonMathQuestion2').style.display = 'block'
       incorrecta++;
    }
      //* botones PREGUNTA 2
    function buttonMath2Op1(){
       document.getElementById('buttonMathQuestion2').style.display='none';  //fin desaparecer
       document.getElementById('space').innerHTML ='Pregunta 3: Si en un triángulo rectágulo un ángulo agudo mide 30 grados.¿Cuánto mide el otro ángulo agudo?';
       document.getElementById('buttonMathQuestion3').style.display = 'block';
       incorrecta++;
    }
    function buttonMath2Op2() {
       //respuesta correcta
       document.getElementById('buttonMathQuestion2').style.display='none'; //fin desaparecer
       document.getElementById('space').innerHTML ='Pregunta 3: Si en un triángulo rectágulo un ángulo agudo mide 30 grados.¿Cuánto mide el otro ángulo agudo?';
       document.getElementById('buttonMathQuestion3').style.display = 'block';
       correcta++;
    }
    function buttonMath2Op3() {
       document.getElementById('buttonMathQuestion2').style.display='none'; //fin desaparecer
       document.getElementById('space').innerHTML ='Pregunta 3: Si en un triángulo rectágulo un ángulo agudo mide 30 grados.¿Cuánto mide el otro ángulo agudo?';
       document.getElementById('buttonMathQuestion3').style.display = 'block';
       incorrecta++;
    }
       //botones PREGUNTA 3
    function buttonMath3Op1() {
       document.getElementById('welcome').style.display='none';
       document.getElementById('buttonMathQuestion3').style.display='none'; //fin desaparecer
       incorrecta++;
       MensajeResultado();
       buttonVolverMath();
    }
    function buttonMath3Op2() {
       document.getElementById('welcome').style.display='none';
       document.getElementById('buttonMathQuestion3').style.display='none'; //fin desaparecer
       incorrecta++;
       MensajeResultado();
       buttonVolverMath();
    }
    function buttonMath3Op3() {
       //respuesta correcta
       document.getElementById('welcome').style.display='none';
       document.getElementById('buttonMathQuestion3').style.display='none'; //fin desaparecer
       correcta++;
       MensajeResultado();
       buttonVolverMath();
    }
     //*****************************************
    function buttonOrthography() { //Jugar ortografía
       document.getElementById('buttonMathsOrthography').style.display='none'
       document.getElementById('welcome').innerHTML ='¡Escogiste la opción de Ortografía!';
       document.getElementById('space').innerHTML = 'Pregunta 1:<br>  Tengo mucho que estudiar.<br> ¡ _____ de mí !';
       document.getElementById('buttonOrtQuestion1').style.display   = 'block';
      limpiarOrtografia();
    }
    function limpiarOrtografia(){
  Limpiar();
   document.getElementById('buttonOrthography').style.display='none';
   document.getElementById('orthography').style.display= 'none';
   document.getElementById('buttonMath').style.display='none';
   document.getElementById('maths').style.display='none';
   document.getElementById('welcome').style.display='none';
}
function buttonOrtographyQuestion1Option1(){
   document.getElementById('buttonOrtQuestion1').style.display='none';
   document.getElementById('space').innerHTML= 'Pregunta 2:<br>  Le ____ dado una buena mordida';
   document.getElementById('buttonOrtQuestion2').style.display='block';
   correcta++;
}
function buttonOrtographyQuestion1Option2(){
   document.getElementById('buttonOrtQuestion1').style.display='none';
   document.getElementById('space').innerHTML= 'Pregunta 2:<br>  Le ____ dado una buena mordida';
   document.getElementById('buttonOrtQuestion2').style.display='block';
   incorrecta++;
}
function buttonOrtographyQuestion1Option3(){
   document.getElementById('buttonOrtQuestion1').style.display='none';
   document.getElementById('space').innerHTML= 'Pregunta 2:<br>  Le ____ dado una buena mordida';
   document.getElementById('buttonOrtQuestion2')
   .style.display='block';
   incorrecta++;
}
function buttonOrtographyQuestion2Option1(){
   document.getElementById('buttonOrtQuestion2').style.display='none';
   document.getElementById('space').innerHTML= 'Pregunta 3:<br>  No creo que él lo ___ arreglado';
   document.getElementById('buttonOrtQuestion3').style.display='block';
   incorrecta++;
}
function buttonOrtographyQuestion2Option2(){
   document.getElementById('buttonOrtQuestion2').style.display='none';
   document.getElementById('space').innerHTML= 'Pregunta 3:<br>  No creo que él lo ___ arreglado';
   document.getElementById('buttonOrtQuestion3').style.display='block' ;
   correcta++;
}
function buttonOrtographyQuestion2Option3(){
   document.getElementById('buttonOrtQuestion2').style.display='none';
   document.getElementById('space').innerHTML= 'Pregunta 3:<br>  No creo que él lo ___ arreglado';
   document.getElementById('buttonOrtQuestion3').style.display='block';
   incorrecta++;
}
function buttonOrtographyQuestion3Option1(){
   document.getElementById('buttonOrtQuestion3').style.display='none';
   incorrecta++;
   MensajeResultado();
   document.getElementById('buttonOrtQuestion3')
   .style.display='none' ;
   buttonVolverOrtografia();
}
function buttonOrtographyQuestion3Option2(){
   document.getElementById('buttonOrtQuestion3').style.display='none';
   incorrecta++;
   MensajeResultado();
   document.getElementById('buttonOrtQuestion3').style.display='none';
   buttonVolverOrtografia();
}
function buttonOrtographyQuestion3Option3(){
   document.getElementById('buttonOrtQuestion3').style.display='none';
   correcta++;
   MensajeResultado();
   document.getElementById('buttonOrtQuestion3').style.display='none';
   buttonVolverOrtografia();
}
function buttonVolverOrtografia(){
   document.getElementById('volverJugarOrtografia').style.display = 'block';
    if(intentosRealizado == totIntentos){
        ocultar();
        document.getElementById('volverJugarOrtografia').style.display = 'none';
        MensajeResultado()
    }
}
function Limpiar(){
  intentosRealizado++;
  correcta  = 0;
  incorrecta = 0;
  ocultar();
}
function ocultar(){
  document.getElementById('volverJugarMate').style.display='none';
  document.getElementById('volverJugarOrtografia').style.display = 'none';

}
function MensajeResultado(){
  document.getElementById('space').innerHTML ='Intentos realizados: ' + intentosRealizado + '/'+totIntentos+ '<br><br><br><br> Tus resultados son:<br>Respuestas correctas: '+correcta+'<br>Respuestas incorrectas: '+incorrecta;
}
