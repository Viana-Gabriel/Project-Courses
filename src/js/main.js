/* Script Pagina index - Listagem e Filtro de Cursos */
const container_cursos = document.querySelector('.cursos__container')
const btnTodos = document.querySelector('#btnTodos')
const btnHtml = document.querySelector("#btnHtml")
const btnCss = document.querySelector("#btnCss")
const btnJavaScript = document.querySelector("#btnJavaScript")

const form = document.querySelector("form")

let cursos = JSON.parse(localStorage.getItem('cursos') || '[]')
let usuarioLogado = JSON.parse(localStorage.getItem('UsuarioLogado'))
let cursosfiltrados = ''

verificaUsuario(usuarioLogado)
verifiCaCursos(cursos)
ListarCursos(cursos)

btnHtml.addEventListener('click', () => {
  cursosfiltrados = FiltrarCursos(btnHtml.value)
  ListarCursos(cursosfiltrados)
  verifiCaCursos()
})
btnCss.addEventListener('click', () => {
  cursosfiltrados = FiltrarCursos(btnCss.value)
  ListarCursos(cursosfiltrados)
  verifiCaCursos()
})
btnJavaScript.addEventListener('click', () => {
  cursosfiltrados = FiltrarCursos(btnJavaScript.value)
  ListarCursos(cursosfiltrados)
  verifiCaCursos()
})
btnTodos.addEventListener('click', () => {
  ListarCursos(cursos)
  verifiCaCursos()
})

function ListarCursos(lista) {

  let listaCurso = ''

  lista.forEach(curso => {
    listaCurso += container_cursos.innerHTML = `
    <div class='curso'>
      <img src="./assets/banner1.png" alt="">
      <h2 class="curso__titulo">${curso.nome}</h2>
      <div class="curso__duracao">
        <i class="fa-regular fa-clock"></i>
        <p>Duraçao:${curso.duracao}hrs</p>
      </div>
    </div>
  `
  })

  container_cursos.innerHTML = listaCurso
}

function FiltrarCursos(categoria) {
  const cursosFiltrados = cursos.filter(curso => curso.categoria == categoria)
  return cursosFiltrados

}

function verifiCaCursos(cursos){
  
if (cursos.length == 0) {
  container_cursos.innerHTML = `
    <h1>Nenhum Curso disponivel no Momento</h1>
  `
} else {
  document.querySelector(".cursos__filter").setAttribute('style', 'display:block; display:flex; align-items: center; ')
  ListarCursos(cursos)
}

}

function verificaUsuario(user){
  if (user) {
    document.querySelector(".nav_bar").innerHTML = `
      <p> Olá, ${user.nome} </p>
      <i class="fa-solid fa-power-off" id='btnSair'></i>
    `
    document.querySelector('#btnSair').addEventListener("click", () => {
      localStorage.removeItem('UsuarioLogado')
      window.location.reload()
    })
  
    if(user.nome === "admin" && user.senha === "admin"){
     document.querySelector('#btnCadastrarCurso').style.display = 'block'
    }else{
      document.querySelector('#btnCadastrarCurso').style.display = 'none'
    }
  
  } else {
    document.querySelector(".nav_bar").innerHTML = `
      <a href="login.html">Login</a>
      <a href="cadastro.html">Singn up</a>
    `
    document.querySelector('#btnCadastrarCurso').style.display = 'none'
  }
  
}



