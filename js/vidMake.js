let btn_b = document.getElementById("videoMakeAtivoBtn")


btn_b.addEventListener("click", function(){
	let container_b = document.getElementById("videoMakeAtivo")

	container_b.classList.toggle("vidmakeActiv")//se tem tira, se não tem coloca (classe)

	setTimeout(()=>{
		document.querySelector('video').play()
	},2000)
})

let btnExluir = document.getElementById("btnExcluir")
btnExluir.addEventListener("click", function(){
	let container2 = document.getElementById("videoMakeAtivo")

	container2.classList.toggle("vidmakeActiv")//se tem tira, se não tem coloca (classe)
	document.querySelector('video').pause()
	
});
