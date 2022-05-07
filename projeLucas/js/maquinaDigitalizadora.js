
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() =>{
            elemento.innerHTML += letra
        }, 40 * i);
    });
    setInterval(()=>{
        typeWriter(elemento)
    },4000);
}


const text =  document.getElementById('writing');
typeWriter(text);