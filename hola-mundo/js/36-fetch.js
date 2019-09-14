'use strict';
//Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

//Fetch hace peticiones asincronas a un servidor
    getUsuarios()
    .then(data => data.json())
    .then(users =>{
        listadoUsuarios(users.data);
        
        return getJanet();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarJanet(user.data);
    });

    function getUsuarios(params) {
        return fetch('https://reqres.in/api/users');
    }

    function getJanet(params) {
        return fetch('https://reqres.in/api/users/2');
    }

    function listadoUsuarios(usuarios) {
    usuarios.map((users, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + " " +users.first_name + " " + users.last_name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
    }  
    function mostrarJanet(user) {
        console.log(user);
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML =user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
    
        document.querySelector("#janet .loading").style.display = 'none';   
    }