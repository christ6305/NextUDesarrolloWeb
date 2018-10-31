var estructura={
"Personas":[
		{
			"Nombre":"Christian",
			"Edad":24,
			"Direccion":"Carcelen",
			"Estudios": [
        {
          "Primaria Escolar":{
            "Lugar":"Centro",
            "Fecha":"1995-2001"
          },
          "Secundaria Escolar":{
            "Lugar":"Norte",
            "Fecha":"2001-2006"
          }
        }
			]
		},
		{
			"Nombre":"Andres",
			"Edad":25,
			"Direccion":"Carcelen",
			"Estudios": [
        {
          "Primaria Escolar":{
            "Lugar":"Centro",
            "Fecha":"1995-2001"
          },
          "Secundaria Escolar":{
            "Lugar":"Norte",
            "Fecha":"2001-2006"
          }
        }
			]
		}
	]
};

var persona1=estructura.Personas[0];
var persona2=estructura.Personas[1];

var edad1=persona1.edad;
var edad2=persona2.edad;

var estudios1=persona1.estudios[1];
var estudios2=persona2.estudios[1];
