


  // Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
  // function typeWriter(elemento) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   for(let i = 0; i < textoArray.length; i++) {
  //     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  //   }
  // }



function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
    // setInterval(()=>{
    //     typeWriter(elemento)
    // },4000);
  }
  const text = document.getElementById('textDigit');
  typeWriter(text);



  function typeWriter2(elemento) {
    const textoArray2 = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray2.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
    // setInterval(()=>{
    //     typeWriter(elemento)
    // },4000);
  }
  const text2 = document.getElementById('textDigit2');
  typeWriter2(text2);