# Verify-Phone
Código para validar y separar un número de teléfono de 2 en 2

El código que les muestro nos ayuda a capturar la cadena de texto que pongamos en el input para el teléfono y verificar en primer lugar que sea menor o igual a 10 digitos y mayor de 8 digitos.

Una vez hecho esto va regresar un array que con una expresión regular va a separar la cadena de 2 en 2 digitos ya sólo resta estilizar el resultado como queremos

En el ejemplo puse lo siguiente:

telefono = result[0] +' '+result[1]+' '+result[2]+' '+result[3]+' '+result[4]

Esto regresa: 55 55 55 55 55

Si quisieramos algo cómo: (55) 55-55-5555 sería así:

telefono = '(' + result[0] + ')' +' '+ result[1] + '-' + result[2] + '-' + result[3] + result[4]


