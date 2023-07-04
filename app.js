// function sumaTodosImpares(array) {
//     // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
//     // y debe devolver la suma total entre todos los numeros impares.
//     // ej:
//     // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15
  
//     // Tu código aca: 
//     var suma =0;

//     for (i=0; i<array.length; i++){
//       if (array[i]%2 != 0){
//         suma+=array[i];
//       }
//     }

//     return suma;
//   };
  
//   let arrayNumeros = [1, 5, 2, 9, 6, 4];

//   console.log(sumaTodosImpares(arrayNumeros));


  //-----------------------------------------------------------------------------------------------------------------------
  // function stringMasLarga(str) {
  //   // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
  //   // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
  //   // Ej:
  //   // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
  //   // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
  //   // Tip: podes usar el metodo de String 'split'
  
  //   // Tu código aca: 
    
  //   var palabra = str.split(" ");
  //   var palabraLarga = "";

  //   for (i=0; i<palabra.length; i++){
  //     if (palabra[i].length>palabraLarga.length){
  //       palabraLarga=palabra[i];
  //     };
  //   }

  //   return palabraLarga;
  // } 
  
  // let cadena = 'Me gusta mucho javascript';

  // console.log(stringMasLarga(cadena));

  //-----------------------------------------------------------------------------------------------------------------------
  // function estaOffline(usuarios, nombre) {
  //   // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
  //   // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
  //   // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
  //   // ej:
  //   // var usuarios = [
  //   //     {
  //   //       nombre: 'toni',
  //   //       online: true
  //   //     },
  //   //     {
  //   //       nombre: 'emi',
  //   //       online: true
  //   //     },
  //   //     {
  //   //       nombre: 'agus',
  //   //       online: false
  //   //     }
  //   // ];
  //   // estaOffline(usuarios, 'agus') retorna true
  //   // estaOffline(usuarios, 'emi') retorna false

  //   var online=Boolean;

  //   for (let usuario in usuarios){
  //     if (usuarios[usuario].nombre==nombre){
  //       if (usuarios[usuario].online==true){
  //         online=true;
  //       }else{
  //         online=false;
  //       }
  //     }
  //   }

  //   return online;
  // }
  
  //   // Tu código aca:
  
  //   var usuarios = [
  //     {
  //       nombre: 'toni',
  //       online: true
  //     },
  //     {
  //       nombre: 'emi',
  //       online: true
  //     },
  //     {
  //       nombre: 'agus',
  //       online: false
  //     }
  //   ];
    
  //   console.log(estaOffline(usuarios, 'agus'));
  //   console.log(estaOffline(usuarios, 'emi')); 
  
    //-----------------------------------------------------------------------------------------------------------------------
  // function actividadesEnComun(persona1, persona2) {
  //   // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  //   // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  //   // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //   //     persona2 = ['comer', 'dormir', 'futbol']
  //   // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  //   // Tip: podes usar ciclos for anidados.
  //   // Tu código aca:
    
  //   var arrayComun=[];

  //   for (i=0; i<persona1.length; i++){
  //     for (x=0; x<persona2.length; x++){
  //       if (persona1[i]===persona2[x]){
  //         arrayComun.push(persona1[i]);
  //       }
  //     }
  //   }

  //   return arrayComun;
  // }

  // let persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
  // let persona2 = ['comer', 'dormir', 'futbol'];

  // console.log(actividadesEnComun(persona1, persona2));
  //-----------------------------------------------------------------------------------------------------------------------
  
  // function buscaDestruye(arreglo, num) {
  //   // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  //   // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  //   // La función debe retornar el array sin los números sacados.
  //   // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  //   // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  //   // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //   //
  //   // Tu código aca:

  //   for (i=0; i<arreglo.length; i++){
  //     if (arreglo[i]===num){
  //       arreglo.splice(i,1);
  //     }
  //   }

  //   return arreglo;
  // }

  // let arrayNumeros = [1, 2, 3, 4, 1];
  // let numEliminar = 1;

  // console.log(buscaDestruye(arrayNumeros,numEliminar));
  //-----------------------------------------------------------------------------------------------------------------------
  
  // function sumaDeArrays(array) {
  //     // El array recibido por parametro es un array multidimencional con array's que 
  //     //contienen elementos de tipo number
  //     // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
  //     // Sumando los elementos de cada array que contenga dos elementos,
  //     // y devolviendo la suma del mismo
  //     // OJO: Si el elemento dentro del array que ingresa por prop, 
  //     //ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
  //     //let a = [[5, 5], 4, [10, 15], [25, 10]]. 
      
  //     var arrayNuevo = [];
  //     var suma=0;

  //     for (i=0; i<a.length; i++){
  //       if (a[i].length>0){
          
  //         suma=0;

  //         for (x=0; x<a[i].length; x++){
  //           suma+=a[i][x];
  //         }
  //       }else{
  //         suma=a[i];
  //       }

  //       arrayNuevo.push(suma);
  //     }

  //     return arrayNuevo;
  // };

  // let a = [[5, 5], 4, [10, 15], [25, 10]];

  // console.log(sumaDeArrays(a));
  //-----------------------------------------------------------------------------------------------------------------------
  
  // function mismoValorMismosElementos(numero, divisor) {
  //     // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  //     // Todos los elementos deben tener el mismo valor
  //     // OJO: Si el resultado de la division no es un entero, deben devolver false

  //     var resultado=numero/divisor;
  //     var array = [];

  //     if (numero%divisor== 0){
  //       for (i=0; i<divisor; i++){
  //         array.push(resultado);
  //       }
  //     }else{
  //       array=false;
  //     }
   
  //     return array;
  // }; 
  
  // console.log(mismoValorMismosElementos(10,2));
  //-----------------------------------------------------------------------------------------------------------------------
  
  
  // function map(array, cb) {
  //   // Crea un nuevo array
  //   // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  //   // El nuevo array debe tener la misma longitud que el array del argumento
  //   //Tu código: 
    
  //   cb = array.map(i => {return i;})

  //   var nuevoArray = cb.map(i => {return i;})

  //   return nuevoArray;
  // }
  
  // let array=[7,4,2,9,8,3,1,10,12];
  // let cb = [];

  // console.log(map(array,cb));
  //-----------------------------------------------------------------------------------------------------------------------
   
  // function filter(array) {
  //   //Filtrar todos los elementos del array que comiencen con la letra "a".
  //   //Devolver un nuevo array con los elementos que cumplen la condición
  //   //Tu código:

  //   console.log(array[0].split(""))

  //   var nuevoArray = array.filter((i) => i.substring(0,1)=='a');

  //   return nuevoArray;
  // }
  
  // let array=["aroma","cara","avion","saludo","anillo"];

  // console.log(filter(array));
  //-----------------------------------------------------------------------------------------------------------------------
  
  
  // function sumarElTipo(arreglo) {
  //   // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  //   // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  //   // de veces que se repita cada tipo.
  //   // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  //   // Ej:
  //   // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  //   // Tip: podes usar el ciclo for o el metodo de Array 'reduce'
  
  //   // Tu código aca: 

  //   var contador = {};

  //   arreglo.forEach(vehiculo => (contador[vehiculo] = contador[vehiculo] + 1 || 1));

  //   return contador;
  // }
  
  // console.log(sumarElTipo(['auto', 'moto', 'auto']));
  
  //-----------------------------------------------------------------------------------------------------------------------

  // function meow(){return "meow"};

  // function crearGato(nombre, edad) {
  //   // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  //   // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  //   // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  //   // Devuelve el objeto
  //   // Tu código: 
      
  //   const objetoGato = {
  //     nombre:nombre
  //    };

  //    objetoGato.edad=edad;

  //   return objetoGato;
  // }
  
  // let nombre="gatun";
  // let edad=10;

  // console.log(crearGato(nombre, edad));
  //-----------------------------------------------------------------------------------------------------------------------

  // function agregarPropiedad(objeto, property) {
  //   // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  //   // Devuelve el objeto 
  //   // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  //   // Tu código: 
  //   //objeto [property]= null;  
     
  //   objeto.property = property;

  //   return objeto;
  // } 
  
  // let objeto={};

  // console.log(agregarPropiedad(objeto, null));

  //-----------------------------------------------------------------------------------------------------------------------

  // function invocarMetodo(objeto, metodo) {
  //   // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  //   // Invoca ese método
  //   // Nada necesita ser devuelto ("returned")
  //   // Tu código: 
   
  //   objeto.metodo;
  // }
  
  // let objeto={
  //   funcion:null
  // }

  // invocarMetodo(objeto, "funcion");
   
   //-----------------------------------------------------------------------------------------------------------------------
  // function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  //   // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  //   // Multiplica el numeroMisterioso por 5 y devuelve el producto
  //   // Tu código:

  //   var resultado = objetoMisterioso.numeroMisterioso*5;

  //   return resultado
  // }

  // let objetoMisterioso={
  //   numeroMisterioso:7
  // }

  // console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso));
  
   //-----------------------------------------------------------------------------------------------------------------------
  // function eliminarPropiedad(objeto, unaPropiedad) {
  //   // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  //   // tip: tenes que usar bracket notation = Notacion de corchetes. 
  //   // Devuelve el objeto 
  //   // Tu código:
   
  //   delete objeto[unaPropiedad];
  // }
  
  // let objeto={
  //   propiedad:null
  // }

  // console.log(objeto)
  // eliminarPropiedad(objeto, "propiedad");
  // console.log(objeto)

   //-----------------------------------------------------------------------------------------------------------------------
  // function nuevoUsuario(nombre, email, password) {
  //   // Crea un nuevo objeto con las propiedades coincidiendo con los 
  //   // argumentos que se pasan a la función
  //   // Devuelve el objeto
  //   // Tu código:
  
  //   let objUsuario ={
  //     nombre:nombre,
  //     email:email,
  //     password:password
  //   }

  //   return objUsuario;
  // }
  
  // let nombre="jon";
  // let email="jon.programador@hotmail.es";
  // let password="unaclave";

  // console.log(nuevoUsuario(nombre, email, password));
   //-----------------------------------------------------------------------------------------------------------------------
  // function tieneEmail(usuario) {
  //   // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  //   // De lo contratio, devuelve "false"
  //   // Tu código
    
  //   if (usuario.email===null){
  //     return false
  //   }else{
  //     return true
  //   }
  // } 
  
  // let objUsuario={
  //   nombre:"jon",
  //   email:null
  // }

  // console.log(tieneEmail(objUsuario));
   //-----------------------------------------------------------------------------------------------------------------------
  // function tienePropiedad(objeto, propiedad) {
  //   // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
  //   //cuyo nombre es igual al valor del argumento "propiedad"
  //   // "propiedad" es un string
  //   // De lo contrario, devuelve "false"
  //   // Tu código:
   
  //   if (objeto.hasOwnProperty(propiedad)){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  
  // let objeto={
  //   nombre:"jon"
  // }

  // console.log(tienePropiedad(objeto, "nombre"));

   //-----------------------------------------------------------------------------------------------------------------------
  // function verificarPassword(usuario, password) {
  //   // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  //   // Devuelve "true" si coinciden
  //   // De lo contrario, devuelve "false"
  //   // // Tu código: 
    
  //   if (usuario.password===password){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  
  // let objUsuario={
  //   usuario:"jon",
  //   password:"unaclave"
  // }

  // console.log(verificarPassword(objUsuario, "unaclave"));
   //-----------------------------------------------------------------------------------------------------------------------
  // function actualizarPassword(usuario, nuevaPassword) {
  //   // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  //   // Devuelve el objeto
  //   // Tu código:
  
  //   usuario.password=nuevaPassword;

  //   return usuario
  // }

  // let objUsuario={
  //   usuario:"jon",
  //   password:"unaclave"
  // }

  // console.log(actualizarPassword(objUsuario, "nuevaPassword"));
  
   //-----------------------------------------------------------------------------------------------------------------------
  // function agregarAmigo(usuario, nuevoAmigo) {
  //   // "usuario" tiene una propiedad llamada "amigos" que es un array
  //   // Agrega "nuevoAmigo" al final de ese array
  //   // Devuelve el objeto "usuario"
  //   // // Tu código: 


  //   usuario.amigos.push(nuevoAmigo);

  //   return usuario;
  // }
  
  // let usuario={
  //   amigos:[]
  // }

  // let nuevoAmigo="jose";

  // console.log(agregarAmigo(usuario, nuevoAmigo))

   //-----------------------------------------------------------------------------------------------------------------------
  // function pasarUsuarioAPremium(usuarios) {
  //   // "usuarios" es un array de objetos "usuario"
  //   // Cada objeto "usuario" tiene la propiedad "esPremium"
  //   // Define cada propiedad "esPremium" de cada objeto como "true"
  //   // Devuelve el  array de usuarios
  //   // Tu código: 
    
  //   for (i in usuarios){
  //     usuarios[i].esPremium=true;
  //   }
    
  //   return usuarios
  // }
  
  // let usuarios ={
  //   usuario1:{
  //     esPremium:null
  //   },
  //   usuario2:{
  //     esPremium:null
  //   },
  //   usuario3:{
  //     esPremium:null
  //   }
  // };

  // let objUsuarios = {};
  // console.log(pasarUsuarioAPremium(usuarios));

   //-----------------------------------------------------------------------------------------------------------------------
  // function sumarLikesDeUsuario(usuario) {
  //   // "usuario" tiene una propiedad llamada "posts" que es un array
  //   // "posts" es un array de objetos "post"
  //   // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  //   // Suma todos los likes de todos los objetos "post"
  //   // Devuelve la suma
  //   // Tu código: 
  
  //   console.log(usuario[0])
  // }
  
  // let usuario={
  //   posts1:[{
  //     likes:100
  //   }],
  //   posts2:[{
  //     likes:110
  //   }],
  //   posts3:[{
  //     likes:80
  //   }]
  // }

  // console.log(sumarLikesDeUsuario(usuario));
   //-----------------------------------------------------------------------------------------------------------------------
  // function calcularPrecioDescuento(producto){
  //     var resultado = producto.precio - (producto.precio * producto.porcentajeDeDescuento);

  //   return resultado
  // }

  // function agregarMetodoCalculoDescuento(producto) {
  //   // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  //   // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  //   // El método resta el descuento del precio y devuelve el precio con descuento
  //   // Devuelve el objeto "producto" al final de la función
  //   // Ejemplo:
  //   // producto.precio -> 20
  //   // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  //   // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  //   // Tu código: 


  //   producto = calcularPrecioDescuento(producto) 

  //   return producto
  // }
  
  // let producto={
  //   precio:20,
  //   porcentajeDeDescuento:0.2
  // }

  // console.log(agregarMetodoCalculoDescuento(producto))
  
  //-------------------------------------------Interacción con el DOM--------------------------------------------------------
  // En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
  // Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
  // agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
  // Tu código acá: 
  
  // let createdBy = document.querySelector("#createdBy");

  // createdBy.innerHTML+=' Jon Ibarra';
  //-----------------------------------------------------------------------------------------------------------------------
  
  // La función debe realizar lo siguiente:
  //    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
  //    2) Asignarle a 'toDoShell' la clase 'toDoShell'
  //    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
  //    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
  //       asignándole el valor de la propiedad 'description' del objeto ToDo.
  //    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
  //    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
  //          - Si es true: asignarle a 'toDoText' la clase 'completeText'
  //          - Si es false: no asignarle ninguna clase
  //    7) Agregar 'toDoText' como hijo de 'toDoShell'
  //    8) Devolver la variable toDoShell
  

  // function buildToDo(todo, index) { //todo es un objeto de la clase TODO. //index numerico 
  //   // Tu código acá:
   
  //   let toDoShell=document.createElement('div');

  //   toDoShell.classList.add("toDoShell");

  //   // Consigna 3
  //   let toDoText=document.createElement("span");

  //   // Consigna 4
  //   toDoText.innerHTML=todo.description;

  //   // Consigna 5
  //   toDoText.setAttribute("id",index);

  //   // Consigna 6
  //   if (todo.complete===true){
  //     toDoText.classList.add("completeText");
  //   }

  //   // Consigna 7
  //   toDoShell.appendChild(toDoText);

  //   // Consigna 8
  //   return toDoShell;
  // }
  
  // let todo={
  //   description:"una descripción",
  //   complete:false
  // }
  // let index=1;

  // console.log(buildToDo(todo, index));
  //-----------------------------------------------------------------------------------------------------------------------
  
  // La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
  //  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
  //  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
  //  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
  //  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
  //  5) Al final de este archivo, escribe una línea para hacer el llamado a esta funcion (displayToDos)
  //  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página
  
  // function buildToDos(toDoItems){
  //   toDoItems=[7,8,5,9,12,10,1];

  //   return toDoItems;
  // };

  // function displayToDos() {
  // // Tu código acá:
  // //Paso 1; 
  //   let toDoContainer = document.getElementById("toDoContainer");

  // // Paso 2: 
  //   toDoContainer.innerHTML="";

  // // Paso 3;
  //   var toDoItems=[];
  //   //console.log(buildToDos(toDoItems));
  //   toDoItems=buildToDos(toDoItems);
    
  //  //Paso 4; 
  //  for (i=0;i<toDoItems.length;i++){
  //   let item = document.createElement('p');
  //   item.textContent=toDoItems[i];
  //   toDoContainer.appendChild(item);
  //  }
  // }; 

  // displayToDos()
  
  //-----------------------------------------------------------------------------------------------------------------------