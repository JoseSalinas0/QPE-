var ini = document.getElementById('bi');
var vi = document.getElementById('res');
var re3 = document.getElementById('A3');
var re2 = document.getElementById('A2');
var re1 = document.getElementById('A1');
var barra = document.getElementById('b');
var sp = document.getElementById('n');
var p = document.getElementById('Q');
var imagen = document.getElementById('Ip');
var de = document.getElementById('des');
var pa = document.getElementById('pan');
var numero=0;
var puntaje=0;
var usu= new Usuario();
var pre= new Preguntas();

function inicio(){
    let name=prompt("Ingrese su nombre: ");
    console.log(usu.nuevoUsuario(name));
    numero=0;
    puntaje=0;
    document.getElementById("name").textContent=name;
    pre.pYr();
    sp.textContent=(numero+1)+"/5";
}
function cambiar(){
    if(numero<=4){
        p.textContent=pre.preg(numero);
        re1.textContent=pre.res1(numero);
        re2.textContent=pre.res2(numero);
        re3.textContent=pre.res3(numero);
    }else{
        fin();
        pan(puntaje);
    }
}
inicio();

ini.addEventListener('click',function(){
    document.getElementById("preguntas").style.display="block";
    document.getElementById("b").style.display="block";
    document.getElementById("b").style.backgroundImage="url(img/b1.png)";
    document.getElementById("inicio").style.display="none";
    cambiar();
})

re1.addEventListener('click',function(){
    numero++;
    puntaje+=1;
    cambiar();
    cambiarBarra(numero);
    console.log(puntaje);
})

re2.addEventListener('click',function(){
    numero++;
    cambiar();
    puntaje+=2;
    cambiarBarra(numero);
    console.log(puntaje);
})

re3.addEventListener('click',function(){
    numero++;
    puntaje+=3;
    cambiar();
    cambiarBarra(numero);
    console.log(puntaje);
})

function cambiarBarra(n){
    switch(n){
        case 0:
            sp.textContent=(numero+1)+"/5";
            barra.style.backgroundImage="url(img/b1.png)";
            break
        case 1:
            sp.textContent=(numero+1)+"/5";
            barra.style.backgroundImage="url(img/b2.png)";
            break
        case 2:
            sp.textContent=(numero+1)+"/5";
            barra.style.backgroundImage="url(img/b3.png)";
            break
        case 3:
            sp.textContent=(numero+1)+"/5";
            barra.style.backgroundImage="url(img/b4.png)";
            break
        case 4:
            sp.textContent=(numero+1)+"/5";
            barra.style.backgroundImage="url(img/b5.png)";
            break
    }
}

function pan(p){
    if(p>=5 && p<=7){
        imagen.src="img/b.png";
        de.textContent="No tiene varo, tiene ansiedad, le gustan los memes, es chair@";
        pa.textContent="Bolillo";
        usu.anadirPan("Bolillo");
    }else if(p>=8 && p<=9){
        imagen.src="img/c.png";
        de.textContent="Se cree europe@ fue a escuela privada, chupa buchanans, es bien hablador-a";
        pa.textContent="Cuernito";
        usu.anadirPan("Cuernito");
    }else if(p>=10 && p<=11){
        imagen.src="img/p.png";
        de.textContent="Es mamon-a, tiene varo, la/el guer@ de la colonia, es chaparr@";
        pa.textContent="Muffin";
        usu.anadirPan("Muffin");
    }else if(p>=12 && p<=13){
        imagen.src="img/bag.png";
        de.textContent="Ya no sabes que ver en Netflix, tu gato es tu mejor amigo, ya nadie te invita porque no vas";
        pa.textContent="Bagette";
        usu.anadirPan("Bagette");
    }else if(p>=14 && p<=15){
        imagen.src="img/pb.png";
        de.textContent="Le da miedo a las morras, se drog* con thinner, se salio de la prepa";
        pa.textContent="Pan Blanco";
        usu.anadirPan("Pan Blanco");
    }
    usu.listaUsuarios();
}
function fin(){
    document.getElementById("preguntas").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("final").style.display="block";
}

vi.addEventListener('click',function(){
    document.getElementById("preguntas").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("inicio").style.display="block";
    document.getElementById("final").style.display="none";
    inicio();
})