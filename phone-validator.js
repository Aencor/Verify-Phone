$(document).ready(function(){
  $('#phone').change(function(){
     // Cachamos el valor del input Phone
    var phone = $('#phone').val();

    // Si el input tiene menos de 8 caracteres
    if(phone.length < 8){
      $('.error').html('El teléfono debe contener al menos 8 caracteres');
    } else {

    // Si el input tiene más de 8 caracteres

    // En la expresión regular revisamos el valor del input y lo dividimos de 2 en 2
    var result = phone.match(new RegExp('.{1,'+2+'}', 'g')),
      // Nos arroja un array de la cadena ya solamente la ordenamos como queremos mostrarla si quisieramos agregarle algo sería así: result[0] + '-' + result[1] + '-' result[2] + '-' result[3] + '-' result[4] nos va a regresar 55-55-55-55-55 y así podemos seguir
      telefono = result[0] +' '+result[1]+' '+result[2]+' '+result[3]+' '+result[4];

    // Mostramos la cadena modificada en el input
    $('#phone').val(telefono);

    $('.error').html('');
    }
  });
});
