var numSlide = 93;
var htmljuego = $("#juegofv").html();
var intentosJuego = 0;
var arraytruefalse = [false,false,false];
$(document).ready(function () {
    iniciarJuegofv();
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('.hello_world').pwstabs({
       effect: 'slideleft',
       defaultTab: 1
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('#porcentaje_curso').popover({
            container: 'body',
            html: true,
            content:'<div id="percent_curso" class="blue"></div>',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    })

    $('#porcentaje_curso').on('shown.bs.popover', function () {
        var numItems = $('.done').length / 2;
        var porcent = parseFloat((numItems/numSlide) * 100).toFixed( 2 );
        $("#percent_curso").percircle({percent: porcent ,animate: "true"});
    })

    $('#icon_actividades').off('click').on('click', function(){
        if($(".divcontenido").is(':visible')){
            $(".divcontenido").animate({ width: 'hide' }); 
            $(".menu-actividades").show(1000); 
            setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
        }else{
            $(".menu-actividades").hide();
            setTimeout(function() { toggleOptions('.selector'); }, 10);
            $(".divcontenido").animate({ width: 'show' });
        }
    });
    $('.link_actividad').off('click').on('click', function(){
        $(".menu-actividades").hide();
        setTimeout(function() { toggleOptions('.selector'); }, 10);
        $(".divcontenido").animate({ width: 'show' });

        var number_at= $(this).attr("for");

        switch (number_at) {
            case "c1":
                $('#smartwizard').smartWizard("goToStep", 4);
                $('#smartwizard2').smartWizard("goToStep", 4);
            break;
            case "c2":
                $('#smartwizard').smartWizard("goToStep", 15);
                $('#smartwizard2').smartWizard("goToStep", 15);
            break;
            case "c3":
                $('#smartwizard').smartWizard("goToStep", 33);
                $('#smartwizard2').smartWizard("goToStep", 33);
            break;
            case "c4":
                $('#smartwizard').smartWizard("goToStep", 50);
                $('#smartwizard2').smartWizard("goToStep", 50);
            break;
            case "c5":
                $('#smartwizard').smartWizard("goToStep", 61);
                $('#smartwizard2').smartWizard("goToStep", 61);
            break;
            case "c6":
                $('#smartwizard').smartWizard("goToStep", 82);
                $('#smartwizard2').smartWizard("goToStep", 82);
            break;
          default:
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
        }
        $(".controls-slide").show();
    });
    $('#icon_salir').off('click').on('click', function(e){
        window.open('', '_self', '');
        window.close();
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.tecnicas').off('click').on('click', function(){
        var numt= $(this).text();
        $('.pasos-normas').hide();
        $('.tecnicas'+numt).show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
        audioPasos(numt);
    });
    $('.sistema_medicion').off('click').on('click', function(){
        var numt= $(this).text();
        $('.div_sistema_medicion').hide();
        $('.div_sistema_medicion'+numt).show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
        audioPantalla25(numt);
    });

    $('#zoom_01').elevateZoom({zoomWindowPosition: 10});
    $("select").imagepicker({
        show_label: true,
        clicked: function(e){
            console.log($(this).val());
        }
    })

    tecnica_tierra();
    tipos_terreno();

    $('#smartwizard').smartWizard({
        loader:"show",
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $('#smartwizard2').smartWizard({
        theme:'arrows',
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        },
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        }
    });

    $('#nextSlide').on('click', function () {
        var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"))+1;
         
        switch (stepIndex) {
            case 4:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 15:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 33:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 50:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 61:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 82:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            default:
                $('#smartwizard2').smartWizard("next");
                $('#smartwizard').smartWizard("next");
                break;
        }
                         
    });
    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        controlAudioSlides(stepIndex);
        switch(stepIndex) {
            default:
            // code block
        }
    });
    $('#quiz').quiz({
      //resultsScreen: '#results-screen',
      //counter: false,
      //homeButton: '#custom-home',
      nextButtonText: 'Suguiente',
      counterFormat: 'Pregunta %current de %total',
      resultsFormat: 'Acertaste %score de %total !',
      restartButtonText: 'Reintentar',
      questions: [
        {
          'q': '<img class="imagenquiz" src="assets/img/denominacion-corriente-continua.png"><br> ¿Qué tipo de Corriente representa este símbolo?',
          'options': [
            'Contínua',
            'Alterna',
            'Contínua o alterna',
            'Ninguna'
          ],
          'correctIndex': 0,
          'correctResponse': 'Buen trabajo, continua.',
          'incorrectResponse': 'No es la respuesta'
        },
        {
          'q': '<img class="imagenquiz" src="assets/img/denominacion-conductores.png"><br> ¿A qué Denominación pertenece este símbolo?',
          'options': [
            'Corriente',
            'Conductores',
            'Señalización',
            'Contactos'
          ],
          'correctIndex': 1,
          'correctResponse': 'Respuesta Correcta.',
          'incorrectResponse': 'Sigue Intentanto'
        },
        {
          'q': '<img class="imagenquiz" src="assets/img/senalizacion-sirena.png"><br> ¿Qué tipo de Señalización representa este símbolo?',
          'options': [
            'Sirena',
            'Timbre',
            'Bocina',
            'Dioso Semiconductor'
          ],
          'correctIndex': 0,
          'correctResponse': 'Excelente!.',
          'incorrectResponse': 'Profundiza mas en las actidades de aprendizaje'
        },
        {
          'q': '<img class="imagenquiz" src="assets/img/contactos-normal-abierto-retardado.png"><br> ¿Qué tipo de Contactos representa este símbolo?',
          'options': [
            'Normalmente abierto (NA) Contacto de cierre.',
            'Normalmente cerrado (NC) (Contacto de apertura).',
            'De acción retardada normalmente abierto, cierra retardado.',
            'Normalmente abierto, abre retardado.'
          ],
          'correctIndex': 3,
          'correctResponse': 'Buen trabajo.',
          'incorrectResponse': 'Invalido, sigue estudiando'
        },
        {
          'q': '<img class="imagenquiz" src="assets/img/resistencia-tierra.png"><br> En la denominación “Resistencias, Inductores y capacitores” ¿A qué tipo hace referencia el símbolo?',
          'options': [
            'Resistencia',
            'Condensador, capacitor',
            'Tierra'
          ],
          'correctIndex': 2,
          'correctResponse': 'Respuesta Correcta, sigue asi.',
          'incorrectResponse': 'Sigue Intentando'
        },
      ]
    });

    var wheel = $("#wheel").flipster({
        style: 'wheel',
        spacing: 0,
        start: 0,
        onItemSwitch: function(currentItem, previousItem) {
          console.log('hover a circle'+previousItem);
          $('.wheeldiv p').html($(currentItem).attr("data-flip-title"));
        }
    });

    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
        onItemSwitch: function (currentItem,previousItem,index) {
            console.log(index);
        }
    });

    function tecnica_tierra() {
        var canvas = new fabric.Canvas('tecnica_tierra');
        var imgElement = 'assets/img/b_1.png';
        var imgElement2 = 'assets/img/b_2.png'; 
        var imgElement3 = 'assets/img/b_3.png';
        var imgElement4 = 'assets/img/b_4.png';
        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=40;
            oImg.top=10;
            oImg.scaleToHeight(40);
            oImg.scaleToWidth(40);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle');  
                $("#modal_terrenos_1").modal("show");            
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=260;
            oImg2.top=50;
            oImg2.scaleToHeight(40);
            oImg2.scaleToWidth(40);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() { 
                $("#modal_terrenos_2").modal("show");
                audioPantalla16(2);             
            });
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=240;
            oImg3.top=230;
            oImg3.scaleToHeight(40);
            oImg3.scaleToWidth(40);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
                $("#modal_terrenos_3").modal("show");
                audioPantalla16(3);              
            });
        });
        fabric.Image.fromURL(imgElement4, function(oImg4) {
            oImg4.left=10;
            oImg4.top=230;
            oImg4.scaleToHeight(40);
            oImg4.scaleToWidth(40);
            oImg4.selectable = false;
            canvas.add(oImg4);

            oImg4.on('mouseup', function() {
                $("#modal_terrenos_4").modal("show");   
                audioPantalla16(4);              
            });
        });
    }
    function tipos_terreno() {
        var canvas = new fabric.Canvas('canvas_terrenos');
        var imgElement = 'assets/img/fisicas.png';
        var imgElement2 = 'assets/img/quimicas.png'; 
        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=150;
            oImg.top=45;
            oImg.scaleToHeight(40);
            oImg.scaleToWidth(100);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle');  
                $('.div-terrenos').hide();
                $('.div-terrenos_1').show().css( {'opacity': 0, 'bottom': '-100px' } ).animate( { 'opacity': '1', 'bottom' : 0 }, 1000 ); 
                audioPantalla19(1);  
            });      
            oImg.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=150;
            oImg2.top=180;
            oImg2.scaleToHeight(40);
            oImg2.scaleToWidth(100);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                $('.div-terrenos').hide();
                $('.div-terrenos_2').show().css( {'opacity': 0, 'bottom': '-100px' } ).animate( { 'opacity': '1', 'bottom' : 0 }, 1000 ); 
                audioPantalla19(2);                   
            });
            oImg2.on('mousemove', function() {
              console.log('hover a circle');
            });
        });
    }
    // tabs

    var tabLinks = document.querySelectorAll(".tablinks1");
    var tabContent = document.querySelectorAll(".tabcontent1");

    var tabLinks2 = document.querySelectorAll(".tablinks2");
    var tabContent2 = document.querySelectorAll(".tabcontent2");


    tabLinks.forEach(function(el) {
       el.addEventListener("click", openTabs);
    });
    tabLinks2.forEach(function(el) {
       el.addEventListener("click", openTabs2);
    });


    function openTabs(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    function openTabs2(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent2.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks2.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    $('.carousel').carousel({
      interval: false,
      ride: false
    })

    $(".tablinks").click(function(){
        var idTabs = $(this).parent().parent().parent().attr("id");        

        $(`#${idTabs}>div>.tabs>button`).removeClass("active");
        $(`#${idTabs}>div>.wrapper_tabcontent>div`).removeClass("active");
        
        $(this).addClass("active");
        $(`#${$(this).attr("data-country")}`).addClass("active");

        audioTabs($(this).attr("data-country"));
    });

    $( ".tarjeta-slip" ).click(function () {
        var num = $(this).data('audio');
        audioTarjetas(num);
    })
       
});

var intentosSeleccionMultiple=0;
function seleccionMultiple() {

    var pregunta_1 = $("input[name='pregunta_1']:checked").val();
    var pregunta_2 = $("input[name='pregunta_2']:checked").val();
    var pregunta_3 = $("input[name='pregunta_3']:checked").val();
    $("#calificacionEjercicio_1").show();

    if(!(pregunta_1 && pregunta_2 && pregunta_3)) {
        $("#calificacionEjercicio_1").html(`Debes responder todas las preguntas.`);
        return false;
    }

    var calificacion = 0;

    $("#pregunta_1").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_3").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_1 == "a"){
        calificacion++;
        $("#pregunta_1").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2 == "c") {
        calificacion++;
        $("#pregunta_2").css("background-color", "rgb(57 236 36 / 20%)");
    }

    if (pregunta_3 == "b") {
        calificacion++;
        $("#pregunta_3").css("background-color", "rgb(57 236 36 / 20%)");
    }

    $("#calificacionEjercicio_1").html(`Tu calificación es: ${calificacion}/3`);  

    if (calificacion === 3) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple();
            }
        })
    } else{
        intentosSeleccionMultiple++;

        if(intentosSeleccionMultiple >= 2){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple = 0;
            $("#calificar_oculto").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple() {
    $("#calificacionEjercicio_1").hide();
    $("#pregunta_1").css("background-color", "white");
    $("#pregunta_2").css("background-color", "white");
    $("#pregunta_3").css("background-color", "white");
    $("input[name=pregunta_1]").prop("checked", false);
    $("input[name=pregunta_2]").prop("checked", false);
    $("input[name=pregunta_3]").prop("checked", false);
}


function iniciarJuegofv() {
    
    $(".actividadtruefalse label").checkbox({
          checked: "assets/img/cb2-1.png",
          check: "assets/img/cb2-0.png",
          onChange: function(i) {
                switch (i[0].name) {
                  case "r1":
                    if (i[0].value==="1") {
                        arraytruefalse[0]=true;
                    } else {
                        arraytruefalse[0]=false;
                    }
                    break;
                  case "r2":
                    if (i[0].value==="1") {
                        arraytruefalse[1]=true;
                    } else {
                        arraytruefalse[1]=false;
                    }
                    break;
                  case "r3":
                    if (i[0].value==="1") {
                        arraytruefalse[2]=true;
                    } else {
                        arraytruefalse[2]=false;
                    }
                    break;
                  case "r4":
                    if (i[0].value==="0") {
                        arraytruefalse[3]=true;
                    } else {
                        arraytruefalse[3]=false;
                    }
                    break;
                  default:
                    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                    break;
                }
          },
          onLoad: function(i) {
            // do something
          }
        });
}

$('#validarjuego3').off('click').on('click', function(){
    if (intentosJuego > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        ) 
        $(".actividadtruefalse").hide();
    } else {
        console.log(arraytruefalse);
        if (arraytruefalse.indexOf(false) != -1) {
            Swal.fire(
                '¡Respuesta Invalida!',
                'Selecciona unicamente lo correcto',
                'error'
            )  
            intentosJuego++;
        }else{
            Swal.fire(
                '¡Has acertado!',
                'Continua con la Siguiente actividad',
                'success'
            )    
        }
    }  
});

var intentosSeleccionMultiple3=0;
function seleccionMultiple3() {

    var pregunta_3_1 = $("input[name='pregunta_3_1']:checked").val();
    var pregunta_3_2 = $("input[name='pregunta_3_2']:checked").val();
    var pregunta_3_3 = $("input[name='pregunta_3_3']:checked").val();
    var pregunta_3_4 = $("input[name='pregunta_3_4']:checked").val();
    var pregunta_3_5 = $("input[name='pregunta_3_5']:checked").val();
    var pregunta_3_6 = $("input[name='pregunta_3_6']:checked").val();

   /* if(!(pregunta_3_1 && pregunta_3_2 && pregunta_3_3 && pregunta_3_4 && pregunta_3_5 && pregunta_3_6)) {
        $("#calificacionEjercicio_3").html(`Debes responder todas las preguntas.`);
        return false;
    }*/

    var calificacion = 0;

    $("#pregunta_3_1").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_3_1 == "a" && pregunta_3_2 == "b" && pregunta_3_3 == "c" && pregunta_3_5 == "e" && pregunta_3_6 == "f"){
    $("#calificacionEjercicio_3").show();
        calificacion = 5;
        $("#pregunta_3_1").css("background-color", "rgb(57 236 36 / 20%)");
    $("#calificacionEjercicio_3").html(`Tu calificación es: ${calificacion}/5`);  
    }


    if (calificacion === 5) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple3();
            }
        })
    } else{
        intentosSeleccionMultiple3++;

        if(intentosSeleccionMultiple3 >= 2){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple3 = 0;
            $("#calificar_oculto3").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple3() {
    $("#calificacionEjercicio_3").hide();
    $("#pregunta_3_1").css("background-color", "white");
    $("input[name=pregunta_3_1]").prop("checked", false);
    $("input[name=pregunta_3_2]").prop("checked", false);
    $("input[name=pregunta_3_3]").prop("checked", false);
    $("input[name=pregunta_3_4]").prop("checked", false);
    $("input[name=pregunta_3_5]").prop("checked", false);
    $("input[name=pregunta_3_6]").prop("checked", false);
}

var intentosSeleccionMultiple2=0;
function seleccionMultiple2() {

    var pregunta_2_1 = $("input[name='pregunta_2_1']:checked").val();
    var pregunta_2_2 = $("input[name='pregunta_2_2']:checked").val();
    var pregunta_2_3 = $("input[name='pregunta_2_3']:checked").val();
    $("#calificacionEjercicio_2").show();

    if(!(pregunta_2_1 && pregunta_2_2 && pregunta_2_3)) {
        $("#calificacionEjercicio_2").html(`Debes responder todas las preguntas.`);
        return false;
    }

    var calificacion = 0;

    $("#pregunta_2_1").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2_2").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2_3").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_2_1 == "a"){
        calificacion++;
        $("#pregunta_2_1").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2_2 == "c") {
        calificacion++;
        $("#pregunta_2_2").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2_3 == "b") {
        calificacion++;
        $("#pregunta_2_3").css("background-color", "rgb(57 236 36 / 20%)");
    }

    $("#calificacionEjercicio_2").html(`Tu calificación es: ${calificacion}/3`);  

    if (calificacion === 3) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple2();
            }
        })
    } else{
        intentosSeleccionMultiple2++;

        if(intentosSeleccionMultiple2 >= 2){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple2 = 0;
            $("#calificar_oculto2").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple2() {
    $("#calificacionEjercicio_2").hide();
    $("#pregunta_2_1").css("background-color", "white");
    $("#pregunta_2_2").css("background-color", "white");
    $("#pregunta_2_3").css("background-color", "white");
    $("input[name=pregunta_2_1]").prop("checked", false);
    $("input[name=pregunta_2_2]").prop("checked", false);
    $("input[name=pregunta_2_3]").prop("checked", false);
}