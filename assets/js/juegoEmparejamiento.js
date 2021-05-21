var correctCards = 0;
var intentosEmparejamiento = 0;
$(document).ready(function () { 
    
    init();
});
function init() {
    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['La teoría de análisis de riesgos', 'Sistema de gestión integral:', 'Normas de documentación'];
    var numbers = [1, 2, 3];
    numbers.sort(function () { return Math.random() - .4 });



    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego emparejamiento_oculto" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#contentEmparejamiento',
            stack: '#cardPile p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    for (var i = 1; i <= numbers.length; i++) {
        $('<p class="btn btn-warning" style="width:100%">...</p>').data('number', i).appendTo('#cardSlots').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });
    }
    /*var words = ['...', '...', '...', '...'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%">' + words[i - 1] + '</p>').data('number', i).appendTo('#cardSlots').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }*/

}

function handleCardDrop(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    ui.draggable.position({
        of: $(this), my: 'left top', at: 'left top'
    });

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui.draggable.addClass('correct');
        //ui.draggable.draggable('disable');
        //$(this).droppable('disable');

        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        //ui.draggable.draggable('option', 'revert', false);
    } else {
        ui.draggable.removeClass('correct');
    }
}

function validarResultado(){

    var correctCards = $("#cardPile>p.correct").length;

    if (correctCards === 3) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                init();
            }
        })
    } else{
        intentosEmparejamiento++;

        if(intentosEmparejamiento >= 2){
            Swal.fire(
                '¡Lo sentimos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            $(".emparejamiento_oculto").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}
var correctCards2 = 0;
$(document).ready(function () { 
    
    init2();
});
function init2() {
    // Reset the game
    correctCards2 = 0;
    $('#cardPile2').html('');
    $('#cardSlots2').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Sistema de aseguramiento de la calidad', 'Salud ocupacional', 'Control ambiental'];
    var numbers = [1, 2, 3];
    numbers.sort(function () { return Math.random() - .4 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego emparejamiento_oculto2" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number2', numbers[i]).attr('id', 'cardEmparejamient2' + numbers[i]).appendTo('#cardPile2').draggable({
            containment: '#contentEmparejamiento2',
            stack: '#cardPile2 p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    for (var i = 1; i <= numbers.length; i++) {
        $('<p class="btn btn-warning" style="width:100%">...</p>').data('number2', i).appendTo('#cardSlots2').droppable({
            accept: '#cardPile2 p',
            hoverClass: 'hovered',
            drop: handleCardDrop2,
            over: function(event, ui2) {
                ui2.draggable.draggable('option','revert',false);
            },
            out: function(event, ui2) {
                ui2.draggable.draggable('option','revert',true);
            }
        });
    }
    /*var words = ['...', '...', '...', '...'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%">' + words[i - 1] + '</p>').data('number2', i).appendTo('#cardSlots2').droppable({
            accept: '#cardPile2 p',
            hoverClass: 'hovered',
            drop: handleCardDrop2
        });
    }*/

}

function handleCardDrop2(event, ui2) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number2');
    var cardNumber = ui2.draggable.data('number2');

    ui2.draggable.position({
        of: $(this), my: 'left top', at: 'left top'
    });

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui2.draggable.addClass('correct');
        //ui2.draggable.draggable('disable');
        //$(this).droppable('disable');

        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        //ui2.draggable.draggable('option', 'revert', false);
    } else {
        ui2.draggable.removeClass('correct');
    }
}

function validarResultado2(){

    var correctCards2 = $("#cardPile2>p.correct").length;

    if (correctCards2 === 3) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                init2();
            }
        })
    } else{
        intentosEmparejamiento++;

        if(intentosEmparejamiento >= 2){
            Swal.fire(
                '¡Lo sentimos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            $(".emparejamiento_oculto2").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}