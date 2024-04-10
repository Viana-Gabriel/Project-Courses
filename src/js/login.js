const email = document.querySelector("#logEmail")
const senha = document.querySelector("#logSenha")
const btnLogar = document.querySelector('#btnLogar')

let listaUser = []

let userValid = {
  nome: '',
  email: '',
  senha: ''
}

listaUser = JSON.parse(localStorage.getItem('listaUser'))


email.addEventListener('keyup', () => {
  if (email.value.length <= 2) {
    labellogEmail.setAttribute("style", 'color:red;')
    logEmail.setAttribute("style", 'border:1px solid red;')
  } else {
    logEmail.setAttribute("style", 'border:none;')
    labellogEmail.setAttribute("style", 'color:black;')
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 2) {
    labellogSenha.setAttribute("style", 'color:red;')
    logSenha.setAttribute("style", 'border:1px solid red;')
  } else {
    labellogSenha.setAttribute("style", 'color:black;')
    logSenha.setAttribute("style", 'border:none')
  }

})


btnLogar.addEventListener('click', () => {

  listaUser.forEach(user => {
    if (email.value === user.emailCad && senha.value === user.senhaCad) {
      userValid = {
        nome: user.nomeCad,
        email: user.emailCad,
        senha: user.senhaCad
      }
    }
  })

  if (email.value === userValid.email && email.value !== '' && senha.value === userValid.senha && senha.value !== '') {
    localStorage.setItem('UsuarioLogado', JSON.stringify(userValid))
    window.location.href = '/src/index.html'

  } else {
    msg.setAttribute("style", 'display:block; background:#ec5537; display:flex;gap:10px;color:white')
    document.querySelector("#msg").innerHTML = `
    <i class="fa-solid fa-circle-exclamation"></i>
    <p>Falha ao Realizar Login: Email ou senha Invalidos</p>
    `
    email.style.border = '1px solid red'
    senha.style.border = '1px solid red'

    document.querySelector("#labellogEmail").style.color= `red`
    document.querySelector("#labellogSenha").style.color = `red`

    email.value = ''
    senha.value = ''
  }

})


console.log(listaUser)