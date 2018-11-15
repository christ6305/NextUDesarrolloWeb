var canvas=document.getElementById('miCanvas'),
    context=canvas.getContext('2d')

// context.beginPath();
// //punto inicio
// context.moveTo(100,30);
// //linea recta en punto final
// context.lineTo(200,150);
// //linea visible
// context.stroke()

// context.beginPath();
// //posicion y dimensiones de rectangulo
// context.rect(100,50,50,100);
// //fondo y contorno
// context.fillStyle='blue';
// context.fill();
// context.lineWidth=5;
// context.strokeStyle='black';
// context.stroke()

// context.beginPath();
// context.fillStyle='blue';
// context.strokeStyle='black';
// context.lineWidth=5;
// context.fillRect(100,50,50,100);
// context.strokeRect(100,50,50,100);
//clearRect(x,y,ancho,alto)

//x,y,radio, angulo inicio, angulo fin, direccion
// context.arc(100,100,50,Math.PI,Math.PI*1.5,false)
// context.stroke();

// context.arc(120,120,70,0,2*Math.PI,false)
// context.fillStyle='#ff8800'
// context.fill()

// context.font='bold 30pt Arial, sans-serif'
// context.fillText('Hola Christ!',20,50)

var imgObj=new Image()
imgObj.onload=function(){
  context.drawImage(imgObj,50,50,200,150)
}

imgObj.src='img/nextu_logo_500.jpg'
