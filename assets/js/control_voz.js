var audioActivo = true;
var audioActual = new Audio();

/**
 * por sí en algún momento se necesita saber el slide actual del smart wizard
 */
function onLoadAudio() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlAudioSlides(stepIndex);
}
function pause_audio() {
    audioActual.pause();
}

function controlAudioSlides(numeroSlide) {

    if(audioActual)
        audioActual.pause();

    switch (numeroSlide) {
        case 1:
            audioActual = new Audio('assets/voz/U002P01001.mp3');
            break;
        case 2:
            $(`#tabsObjetivos>div>.tabs>button`).removeClass("active");
            $(`#tabsObjetivos>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");         
            
            audioActual = new Audio('assets/voz/U002P01002.mp3');
            break;            
        case 3:
            $(`#tabsAprenderas>div>.tabs>button`).removeClass("active");
            $(`#tabsAprenderas>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabUnidad_aprenderas").addClass("active");
            $(`#unidad_aprenderas`).addClass("active");        

            audioActual = new Audio('assets/voz/U002P01006.mp3');
            break;            
        case 4:
            $('#carouselActividadAprendizaje1').carousel(0);
            audioActual = new Audio('assets/voz/U002P01008.mp3');
            break;            
        case 5:
            audioActual = new Audio('assets/voz/U002P01011.mp3');
            break;    
        case 6:
            $('#carouselp2-6').carousel(0);
            audioActual = new Audio('assets/voz/U002P01013.mp3');
            break;                                              
        case 7:
            audioActual = new Audio('assets/voz/U002P01021.mp3');
            break;                                              
        case 8:          
            audioActual = new Audio('assets/voz/U002P01024.mp3');
            break;            
        case 9:
            $("#carouselp2-9").carousel(0);
            audioActual = new Audio('assets/voz/U002P01026.mp3');
            break;            
        case 10:
            audioActual = new Audio('assets/voz/U002P01033.mp3');
            break;            
        case 11:
            $("#carouselp2-11").carousel(0);          
            audioActual = new Audio('assets/voz/U002P01036.mp3');
            break;            
        case 12:
            $("#carouselp2-12").carousel(0);
            audioActual = new Audio('assets/voz/U002P01040.mp3');
            break;
        case 13:      
            audioActual = new Audio('');
            break;            
        case 14:
            audioActual = new Audio('assets/voz/U002P01049.mp3');
            break;            
        case 15:
            $('#carouselActividadAprendizaje2').carousel(0);
            audioActual = new Audio('assets/voz/U002P01050.mp3');
            break;               
        case 16:
            audioActual = new Audio('assets/voz/U002P01053.mp3');
            break;            
        case 17:
            $('#carouselExampleIndicators11').carousel(0);
            audioActual = new Audio('assets/voz/U002P01054.mp3');
            break;            
        case 18:
            audioActual = new Audio('assets/voz/U002P01057.mp3');
            break;            
        case 19:  
            $('#carouselExampleIndicators12').carousel(0);       
            audioActual = new Audio('assets/voz/U002P01058.mp3');
            break;
        case 20:
            audioActual = new Audio('assets/voz/U002P01060.mp3');
            break;            
        case 21:
            $('#carouselExampleIndicators13').carousel(0);
            audioActual = new Audio('assets/voz/U002P01061.mp3');
            break;                         
        case 22:
            audioActual = new Audio('assets/voz/U002P01063.mp3');
            break;                         
        case 23:
            audioActual = new Audio('assets/voz/U002P01064.mp3');
            break;                         
        case 24:
            $("#carouselExampleIndicators14").carousel(0);
            audioActual = new Audio('assets/voz/U002P01070.mp3');
            break;                         
        case 25: 
            $("#carouselExampleIndicators15").carousel(0);        
            audioActual = new Audio('assets/voz/U002P01077.mp3');
            break;      
        case 26:
            audioActual = new Audio('assets/voz/U002P01081.mp3');
            break;   
        case 27:
            $('.collapse').removeClass('show');
            audioActual = new Audio('assets/voz/U002P01085.mp3');
            break; 
        case 28:
            $('.collapse').removeClass('show');
            audioActual = new Audio('assets/voz/U002P01087.mp3');
            break;
        case 29:
            audioActual = new Audio('assets/voz/U002P01091.mp3');
            break; 
        case 30:
            $("#carouselExampleIndicators16").carousel(0);
            audioActual = new Audio('assets/voz/U002P01093.mp3');
            break;  
        case 31:
            $("#carouselp2-31").carousel(0);
            audioActual = new Audio('assets/voz/U002P01098.mp3');
            break;    
        case 32:
            audioActual = new Audio('assets/voz/U002P01105.mp3');
            break;    
        case 33:
            $("#carouselActividadAprendizaje3").carousel(0);
            audioActual = new Audio('assets/voz/U002P01106.mp3');
            break; 
        case 34:
            $("#carouselExampleIndicators17").carousel(0);
            audioActual = new Audio('assets/voz/U002P01109.mp3');
            break;   
        case 35:
            audioActual = new Audio('assets/voz/U002P01111.mp3');
            break;   
        case 36:
            $("#carouselExampleIndicators18").carousel(0);
            audioActual = new Audio('assets/voz/U002P01112.mp3');
            break;  
        case 37:
            audioActual = new Audio('assets/voz/U002P01114.mp3');
            break;   
        case 38:
            $("#carouselp2-38").carousel(0);
            audioActual = new Audio('assets/voz/U002P01115.mp3');
            break;    
        case 39:
            $("#carouselp2-39").carousel(0);
            audioActual = new Audio('assets/voz/U002P01117.mp3');
            break;  
        case 40:
            audioActual = new Audio('assets/voz/U002P01119.mp3');
            break; 
        case 41:
            audioActual = new Audio('assets/voz/U002P01120.mp3');
            break;  
        case 42:
            audioActual = new Audio('assets/voz/U002P01125.mp3');
            break;
        case 43:
            $("#carouselp2-43").carousel(0);
            audioActual = new Audio('assets/voz/U002P01128.mp3');
            break;
        case 44:
            audioActual = new Audio('assets/voz/U002P01132.mp3');
            break;
        case 45:
            audioActual = new Audio('assets/voz/U002P01133.mp3');
            break;
        case 46:
            $("#carouselp2-46").carousel(0);
            audioActual = new Audio('assets/voz/U002P01134.mp3');
            break;
        case 47:
            audioActual = new Audio('assets/voz/U002P01136.mp3');
            break;
        case 48:
            audioActual = new Audio('assets/voz/U002P01137.mp3');
            break;
        case 49:
            audioActual = new Audio('assets/voz/U002P01140.mp3');
            break;
        case 50:
            $("#carouselActividadAprendizaje4").carousel(0);
            audioActual = new Audio('assets/voz/U002P01141.mp3');
            break;
        case 51:
            audioActual = new Audio('assets/voz/U002P01144.mp3');
            break;
        case 52:
            audioActual = new Audio('assets/voz/U002P01145.mp3');
            break;
        case 53:
            audioActual = new Audio('assets/voz/U002P01146.mp3');
            break;
        case 54:
            audioActual = new Audio('assets/voz/U002P01147.mp3');
            break;
        case 55:
            $("#carouselp2-55").carousel(0);
            audioActual = new Audio('assets/voz/U002P01150.mp3');
            break;
        case 56:
            audioActual = new Audio('assets/voz/U002P01152.mp3');
            break;
        case 57:
            $("#carouselp2-57").carousel(0);
            audioActual = new Audio('assets/voz/U002P01155.mp3');
            break;
        case 58:
            audioActual = new Audio('assets/voz/U002P01160.mp3');
            break;
        case 59:
            audioActual = new Audio('assets/voz/U002P01161.mp3');
            break;
        case 60:
            audioActual = new Audio('assets/voz/U002P01164.mp3');
            break;
        case 61:
            $("#carouselActividadAprendizaje5").carousel(0);
            audioActual = new Audio('assets/voz/U002P01165.mp3');
            break;
        case 62:
            audioActual = new Audio('assets/voz/U002P01168.mp3');
            break;
        case 63:
            $("#carouselp2-63").carousel(0);
            audioActual = new Audio('assets/voz/U002P01170.mp3');
            break;
        case 64:
            $("#carouselp2-64").carousel(0);
            audioActual = new Audio('assets/voz/U002P01174.mp3');
            break;
        case 65:
            $("#carouselp2-65").carousel(0);
            audioActual = new Audio('assets/voz/U002P01181.mp3');
            break;
        case 66:
            audioActual = new Audio('assets/voz/U002P01186.mp3');
            break;
        case 67:
            audioActual = new Audio('assets/voz/U002P01187.mp3');
            break;
        case 68:
            audioActual = new Audio('assets/voz/U002P01190.mp3');
            break;
        case 69:
            audioActual = new Audio('assets/voz/U002P01191.mp3');
            break;
        case 70:
            audioActual = new Audio('assets/voz/U002P01192.mp3');
            break;
        case 71:
            audioActual = new Audio('assets/voz/U002P01193.mp3');
            break;
        case 72:
            $("#carouselp2-72").carousel(0);
            audioActual = new Audio('assets/voz/U002P01198.mp3');
            break;
        case 73:
            $("#carouselpantalla73").carousel(0);
            audioActual = new Audio('assets/voz/U002P01201.mp3');
            break;
        case 74:
            $("#carouselpantalla74").carousel(0);
            audioActual = new Audio('assets/voz/U002P01205.mp3');
            break;
        case 75:
            audioActual = new Audio('assets/voz/U002P01211.mp3');
            break;
        case 76:
             $("#carouselpantalla76").carousel(0);
            audioActual = new Audio('assets/voz/U002P01212.mp3');
            break;
        case 77:
            audioActual = new Audio('assets/voz/U002P01214.mp3');
            break;
        case 78:
            audioActual = new Audio('assets/voz/U002P01215.mp3');
            break;
        case 79:
            audioActual = new Audio('assets/voz/U002P01216.mp3');
            break;
        case 80:
            audioActual = new Audio('assets/voz/U002P01217.mp3');
            break;
        case 81:
            audioActual = new Audio('assets/voz/U002P01222.mp3');
            break;
        case 82:
            $("#carouselActividadAprendizaje6").carousel(0);
            audioActual = new Audio('assets/voz/U002P01223.mp3');
            break;
        case 83:
            audioActual = new Audio('assets/voz/U002P01226.mp3');
            break;
        case 84:
            audioActual = new Audio('assets/voz/U002P01227.mp3');
            break;
        case 85:
            audioActual = new Audio('assets/voz/U002P01228.mp3');
            break;
        case 86:
            audioActual = new Audio('assets/voz/U002P01231.mp3');
            break;
        case 87:
            audioActual = new Audio('assets/voz/U002P01232.mp3');
            break;
        case 88:
            audioActual = new Audio('assets/voz/U002P01233.mp3');
            break;
        case 89:
            $("#carouselpantalla85").carousel(0);
            audioActual = new Audio('assets/voz/U002P01234.mp3');
            break;
        case 90:
            audioActual = new Audio('assets/voz/U002P01236.mp3');
            break;
        case 91:
            audioActual = new Audio('assets/voz/U002P01239.mp3');
            break;
        case 92:
            audioActual = new Audio('assets/voz/U14D183.mp3');
            break;
        case 93:
            audioActual = new Audio('assets/voz/U14D183.mp3');
            break;                       
        default:
            audioActual = undefined;
            break;
    }
    
    if(!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();        
    }

    if(audioActual){
        audioActual.play();
    }

}

$("#audioActivo").click(function() { 
    audioActivoFuncion();
});

function audioActivoFuncion() {
    audioActivo = !audioActivo;
    
    if(!audioActivo) {
        $("#iconoAudioActivo").hide();
        $("#iconoAudioInactivo").show();

        //No se habilita el audio automáticamente.
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
    } else {
        $("#iconoAudioInactivo").hide();        
        $("#iconoAudioActivo").show();
    }
    
    if (audioActual)
        audioActual.pause();       
}

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#resumeAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.play();       

    $("#resumeAudio").hide();
    $("#pauseAudio").show();
});

function reproducirAudio(audioLocation) {
    if (audioActual)
        audioActual.pause();    

    audioActual = new Audio(audioLocation);        

    if (!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();
    }

    if (audioActual)
        audioActual.play();    
}
$('.modal').on('hidden.bs.modal', function (e) {
    if (audioActual)
        audioActual.pause();    
});

/**
 * Configuraciones personalizadas para tabs de audio
 */
function modal_p90Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01237.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function modal_p85Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01229.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p80Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01218.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01220.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p71Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01194.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01196.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p67Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01188.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p65Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01184.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p64Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01177.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01179.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p63Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01173.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p59Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01162.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p56Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01153.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p54Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01148.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p48Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p42Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01126.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p41Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01121.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01123.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p31Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01103.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

 function modal_p28Audio(opcion){
     var audioLocation;

     switch (parseInt(opcion)) {
         case 1:
             audioLocation = 'assets/voz/U002P01089.mp3';
             break;
         default:
             break;
     }

     reproducirAudio(audioLocation);
 }

function collapsep28Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function collapsep27Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01086.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p26Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01083.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p231Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01065.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01067.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p13Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01047.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p11Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01038.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p10Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01034.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function modal_p7Audio(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U002P01022.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioConceptos(numeroTab) {

    var audioLocation;

    switch (parseInt(numeroTab)) {
        case 1:
            audioLocation = 'assets/voz/U14D011.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D012.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D013.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D014.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 7:
            $('#carouselConceptos').carousel(0);
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 8:
            $('#carouselConceptos_2').carousel(0);
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTarjetas(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 54:
            audioLocation = 'assets/voz/U14D054.mp3';
            break;
        case 56:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 58:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla13(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D063.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D065.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla16(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla18(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla19(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla24(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla25(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D128.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla30(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D144.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D145.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D146.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla34(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D155.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D157.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla37(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D161.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D163.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D165.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla38(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D172.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D173.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D174.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D175.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPasos(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D023.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 12:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 13:
            audioLocation = 'assets/voz/U14D026.mp3';
            break;
        case 14:
            audioLocation = 'assets/voz/U14D027.mp3';
            break;
        case 15:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
        case 16:
            audioLocation = 'assets/voz/U14D029.mp3';
            break;
        case 17:
            audioLocation = 'assets/voz/U14D030.mp3';
            break;
        case 18:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 19:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

/**
 * Esta función se llama desde contenido.html, ya que de acuerdo al botón seleccionado
 * se abre un modal. Estos audios corresponden a esos casos específicos:
 */
function audioTipoEquipos(tipoEquipo){
    var audioLocation;

    switch (tipoEquipo) {
        case 'electrodos':
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 'barrajes':
            audioLocation = 'assets/voz/U14D044.mp3';
            break;
        case 'conductores':                
            audioLocation = 'assets/voz/U14D046.mp3';
            break;
        case 'puentes':
            audioLocation = 'assets/voz/U14D048.mp3';
            break;
        case 'conectores':
            audioLocation = 'assets/voz/U14D050.mp3';
            break;
        case 'dispositivo':
            audioLocation = 'assets/voz/U14D052.mp3';
            break;
        default:
            break;
    }
    
    reproducirAudio(audioLocation);
}

function audioComentariosFrecuencia(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D055.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D057.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D059.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D060.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioCollapsePuntos(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D070.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D072.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
        default:
            break;
    }         
    
    reproducirAudio(audioLocation);
}

function audioImagenesCA(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D078.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D079.mp3';
            break;
        case 3:
            $("#carouselFrecuencia_2").carousel(0)
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D083.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;            
        case 6:
            audioLocation = 'assets/voz/U14D085.mp3';
            break;            
        default:
            break;
    }

    reproducirAudio(audioLocation);    
}

function audioTransformadoresTab(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D086.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D087.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposLinea(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D090.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D091.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposCorriente(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D094.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D095.mp3';
            break;
        case 3:            
            $("#carouselTipoCorriente").carousel(0);
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposConexiones(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D099.mp3';
            break;
        case 2:
            $("#carouselConexionDelta").carousel(0);
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioImanes(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D111.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D113.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D115.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D117.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D119.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D120.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioElectroImanesDiapositiva(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D132.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D133.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D134.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioElectroImanesTabs(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D135.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D136.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D137.mp3';
            break;
        case 4:
            $("#carouselFoucault").carousel(0);
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTabs(opcion) {
    var audioLocation;

    switch (opcion) {
        case 'Objetivos':
            audioLocation = 'assets/voz/U002P01002.mp3';
            break;
        case 'Contenido':
            audioLocation = 'assets/voz/U002P01003.mp3';
            break;
        case 'Metodologia':
            audioLocation = 'assets/voz/U002P01005.mp3';
            break;
        case 'unidad_aprenderas':
            audioLocation = 'assets/voz/U002P01006.mp3';
            break;
        case 'unidad_necesitas':
            audioLocation = 'assets/voz/U002P01007.mp3';
            break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
}

$('#carouselActividadAprendizaje1').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje1>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01008.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01009.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01050.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01051.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01106.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01107.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01141.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01142.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01165.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01166.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje6').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje6>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01223.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01224.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U05D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D077.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D078.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D077.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D086.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D088.mp3';
            break; 
        case 3:
            audioLocation = 'assets/voz/U14D089.mp3';
            break; 
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators6').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators6>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D093.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D094.mp3';
            break; 
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselp2-6').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-6>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01013.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01014.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U002P01015.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U002P01016.mp3';
            break;  
        case 4:
            audioLocation = 'assets/voz/U002P01017.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U002P01018.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U002P01019.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U002P01020.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-9').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-9>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01026.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01028.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U002P01030.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U002P01032.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselp2-11').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-11>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01036.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01037.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselp2-12').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-12>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01040.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01041.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U002P01042.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U002P01043.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U002P01044.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U002P01045.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators11').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators11>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01054.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01055.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U002P01056.mp3';
            break; 
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators12').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators12>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01058.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01059.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators13').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators13>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01061.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01062.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators14').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators14>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01071.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01072.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01073.mp3';
            break; 
        case 3:
            audioLocation = 'assets/voz/U002P01074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U002P01075.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators15').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators15>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01077.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01078.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01079.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators16').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators16>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01094.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01095.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01096.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-31').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-31>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01098.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01099.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01100.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U002P01101.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators17').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators17>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01109.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01110.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators18').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators18>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01112.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01113.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselp2-38').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-38>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01115.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01116.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-39').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-39>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01117.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01118.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-43').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-43>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01129.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01130.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01131.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-46').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-46>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01134.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01135.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-55').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-55>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01150.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01151.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-57').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-57>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01155.2.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01156.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01157.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U002P01158.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U002P01159.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselp2-63').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-63>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01170.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01171.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01172.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-64').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-64>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01174.mp3';
            break;
        case 1:
            audioLocation = '';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01176.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-65').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-65>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01181.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01182.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01183.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselp2-72').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselp2-72>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01198.2.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01199.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01200.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselpantalla73').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla73>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01201.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01202.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01203.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U002P01204.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselpantalla74').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla74>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01205.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01206.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U002P01207.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U002P01208.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U002P01209.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U002P01210.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselpantalla76').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla76>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U002P01212.2.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01213.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselpantalla85').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselpantalla85>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = '';
            break;
        case 1:
            audioLocation = 'assets/voz/U002P01235.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
////////////////////////////////////////////////////

$('#carouselConceptos').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselConceptos_2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselModalAcumuladores').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalAcumuladores>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalDinamos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalDinamos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D034.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D035.mp3';
            break;        
        case 2:
            audioLocation = 'assets/voz/U14D036.mp3';
            break;        
        case 3:
            audioLocation = 'assets/voz/U14D037.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalCeldas').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalCeldas>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D039.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D040.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalPaneles').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalPaneles>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D043.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D044.mp3';
            break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D063.mp3';
            reproducirAudio(audioLocation);
            break;
        case 1:
            audioLocation = 'assets/voz/U14D064.mp3';
            reproducirAudio(audioLocation);
            break;
        case 5:
            audioLocation = 'assets/voz/U14D065.mp3';
            reproducirAudio(audioLocation);
            break;
        case 9:
            audioLocation = 'assets/voz/U14D066.mp3';
            reproducirAudio(audioLocation);
            break;

        default:
            break;
    }
})

$('#carouselGeneracionCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselGeneracionCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D067.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselTipoCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselTipoCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D097.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselConexionDelta').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselConexionDelta>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D101.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselMagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselMagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D122.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D123.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselElectromagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselElectromagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D127.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D129.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D130.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia_2').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D081.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFoucault').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFoucault>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D139.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})