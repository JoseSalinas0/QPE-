class Usuario{
    constructor(){
        this.nombre=[];
        this.pan=[];
        this.num=0;
    }
    nuevoUsuario(n){
        this.nombre[this.num]=n;
        return "Usuario registrado";
    }
    anadirPan(p){
        this.pan[this.num]=p;
        this.num+=1;
    }
    listaUsuarios(){
        for(let i=0;i==this.num;i++){
            console.log(this.nombre[i]);
            console.log(this.pan[i]);
        }
    }
}

class Preguntas{
    constructor(){
        this.pre=[];
        this.r1=[];
        this.r2=[];
        this.r3=[];
    }
    pYr(){
            let j=0;
            this.pre[j]="¿En una fiesta que haces?";
            this.r1[j]="Bailo y hablo con mis amigos";
            this.r2[j]="No suelo ir a fiestas";
            this.r3[j]="Me la paso comiendo";
            j++;
            this.pre[j]="¿Qué haces cuando conoces a una persona?";
            this.r1[j]="Le pregunto sobre el/ella";
            this.r2[j]="Platicamos poco";
            this.r3[j]="Lo invito a comer";
            j++;
            this.pre[j]="¿Cómo eres en tu salón de clases?";
            this.r1[j]="Me la paso comiendo";
            this.r2[j]="Soy tranquilo";
            this.r3[j]="Hablo con mis amig@s y estudio";
            j++
            this.pre[j]="¿Cuándo tienes dinero lo gastas en...?";
            this.r1[j]="Lo gasto en ropa y cosas de marca";
            this.r2[j]="Comprar cosas para mi y mis cercanos";
            this.r3[j]="Lo ahorro";
            j++;
            this.pre[j]="¿Tienes cuidados especiales para verte bien?";
            this.r1[j]="Aseo personal, claro";
            this.r2[j]="Solo lo básico y algo para cuidar mi piel";
            this.r3[j]="Obvio, para verme bien";
    }
    preg(i){
        return this.pre[i];
    }
    res1(i){
        return this.r1[i];
    }
    res2(i){
        return this.r2[i];
    }
    res3(i){
        return this.r3[i];
    }
}
