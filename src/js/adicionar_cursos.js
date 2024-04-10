const form = document.querySelector('form')

let cursos = JSON.parse(localStorage.getItem('cursos') || '[]')
let usuarioLogado = JSON.parse(localStorage.getItem('UsuarioLogado'))

if (usuarioLogado) {
  document.querySelector(".nav_bar").innerHTML = `
    <p> Olá, ${usuarioLogado.nome} </p>
    <i class="fa-solid fa-power-off" id='btnSair'></i>
  `
  document.querySelector('#btnSair').addEventListener("click", () => {
    localStorage.removeItem('UsuarioLogado')
    window.location.href = 'index.html'
  })

} else {
  document.querySelector(".nav_bar").innerHTML = `
    <a href="login.html">Login</a>
    <a href="cadastro.html">Singn up</a>
  `
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const nome = form.inNome.value
  const categoria = form.inCategoria.value
  const duracao = form.inDuracao.value

  if(nome == '' || categoria == '' || duracao == ''){
    alert('Preencha todos os Campos para Cadastrar um novo Curso')
  }else{
    AdicionarCursos({ nome: nome, categoria: categoria, duracao: duracao })
    alert('Curso Cadastrado com sucesso')
    window.location.reload()
  }

})

function AdicionarCursos(curso) {
  cursos.push({
    nome: curso.nome,
    categoria: curso.categoria,
    duracao: curso.duracao
  })

  localStorage.setItem('cursos', JSON.stringify(cursos))
}