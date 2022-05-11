
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const assunto = document.getElementById('assunto')
const mensagem = document.getElementById('mensagem')


document.getElementById('botao').addEventListener('click', (e)=> {
    
    if(nome.value != '' && email.value != '' && tel.value != '' && assunto.value != '' && mensagem.value != ''){
        document.getElementById('nomeInvisible').innerHTML = "Recebemos sua mensagem, obrigado por entrar em contato ;)"
        e.preventDefault()
        setTimeout(()=>{
            document.getElementById('nomeInvisible').innerHTML = ""
        }, 3000)
    }
})