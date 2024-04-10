const nome = document.querySelector("#cadNome")
const email = document.querySelector("#cadEmail")
const senha = document.querySelector("#cadSenha")
const msg = document.querySelector('#msg')

let ValidNome = false
let ValidEmail = false
let ValidSenha = false

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelcadNome.setAttribute("style", 'color:red;')
    cadNome.setAttribute("style", 'border:1px solid red;')
    ValidNome = false
  } else {
    cadNome.setAttribute("style", 'border:none;')
    labelcadNome.setAttribute("style", 'color:black;')
    ValidNome = true
  }
})

email.addEventListener('keyup', () => {
  if (email.value.length <= 2) {
    labelcadEmail.setAttribute("style", 'color:red;')
    cadEmail.setAttribute("style", 'border:1px solid red;')
    ValidEmail = false
  } else {
    cadEmail.setAttribute("style", 'border:none;')
    ValidEmail = true
    labelcadEmail.setAttribute("style", 'color:black;')
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 2) {
    labelcadSenha.setAttribute("style", 'color:red;')
    cadSenha.setAttribute("style", 'border:1px solid red;')
    ValidSenha = false
  } else {
    labelcadSenha.setAttribute("style", 'color:black;')
    cadSenha.setAttribute("style", 'border:none')
    ValidSenha = true
  }

})


btnCadastrar.addEventListener('click', (e) => {

  e.preventDefault()
  if (nome.value == '' && email.value == '' && senha.value == '') {

    nome.style.border = '1px solid red'
    email.style.border = '1px solid red'
    senha.style.border = '1px solid red'

    msg.setAttribute("style", 'display:block; background:#ec5537; display:flex; gap:10px; color:white;')
    msg.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      <p>Preencha todos os campos para realizar o cadastro</p>
    `

  } else if (nome.value == '') {
    msg.setAttribute("style", 'display:block; background:#ec5537; display:flex; gap:10px; color:white;')
    msg.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      <p>Preencha o nome para realizar o cadastro</p>
    `
    nome.style.border = '1px solid red'

  } else if (email.value == '') {
    msg.setAttribute("style", 'display:block; background:#ec5537; display:flex; gap:10px; color:white;')
    msg.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      <p>Preencha o email para realizar o cadastro</p>
      `
    email.style.border = '1px solid red'
  } else if (senha.value == '') {
    msg.setAttribute("style", 'display:block; background:#ec5537; display:flex; gap:10px; color:white;')
    msg.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      <p>Preencha a senha para realizar o cadastro</p>
      `
    senha.style.border = '1px solid red'
  } else if (!ValidEmail || !ValidNome || !ValidSenha) {
    nome.style.border = '1px solid red'
    email.style.border = '1px solid red'
    senha.style.border = '1px solid red'

    msg.setAttribute("style", 'display:block; background:#ec5537; display:flex; gap:10px; color:white;')
    msg.innerHTML = `
      <i class="fa-solid fa-circle-exclamation"></i>
      <p>Campos invalidos tente novamente</p>
      `
    nome.value = ''
    email.value = ''
    senha.value = ''

    labelcadNome.style.color= `red`
    labelcadEmail.style.color = `red`
    labelcadSenha.style.color = `red`

  } else {
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push({
      nomeCad: nome.value,
      emailCad: email.value,
      senhaCad: senha.value
    })

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    nome.value = ''
    email.value = ''
    senha.value = ''


    msg.innerHTML = ''
    msg.setAttribute("style", 'display:block; background:#3c9f2f; display:flex;gap:10px;')
    msg.innerHTML = `
      <i class="fa-solid fa-check"></i>
      <p>Cadastro realizado com sucesso</p>
    `
  }
})


