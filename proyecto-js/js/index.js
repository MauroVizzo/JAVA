const chequeoRespuesta = (respuestaCorrecta, pregunta) => {
    let respuesta = prompt(pregunta).toLowerCase();

    while (respuesta !== "no" && respuesta !== "si") {
        alert("Estas muy tibio o muy desorientado! Si o no, Dale!");
        respuesta = prompt(pregunta).toLowerCase();
    }
    if (respuesta === respuestaCorrecta) {
        alert("Claro Mi Shey");
    } else {
        alert("Mmmm.. no lo sé Rick!..");
    }
}

for (let i = 0; i <= 3; i++) {
    let pregunta;
    let respuestaCorrecta;

    switch (i) {
        case 1:
            pregunta = "El asado es más rico que el sushi?";
            respuestaCorrecta = "si";
            chequeoRespuesta(respuestaCorrecta, pregunta);
            break;
        case 2:
            pregunta = "Los redondos son mejores que Soda Stereo?";
            respuestaCorrecta = "si";
            chequeoRespuesta(respuestaCorrecta, pregunta);
            break;    
        case 3:
            pregunta = "River es más grande que Boca?";
            respuestaCorrecta = "no";
            chequeoRespuesta(respuestaCorrecta, pregunta);
            break;        
        default:
            alert("Una encuestita del bien para la gente.. POR SI O POR NO!");
            break;
    }
}