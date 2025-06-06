const posts = JSON.parse(localStorage.getItem("posts")) || []
const index = localStorage.getItem("editPost")
const post = posts[index]

// Preencher campos com dados antigos
document.getElementById("edit-title").value = post.titleInput
document.getElementById("edit-content").value = post.contentInput

function salvarEdicao() {
  const novoTitulo = document.getElementById("edit-title").value
  const novoConteudo = document.getElementById("edit-content").value

  if (novoTitulo === "" || novoConteudo === "") {
    alert("Preencha todos os campos")
    return
  }

  posts[index].titleInput = novoTitulo
  posts[index].contentInput = novoConteudo
  localStorage.setItem("posts", JSON.stringify(posts))
  window.location.href = "index.html"
}
