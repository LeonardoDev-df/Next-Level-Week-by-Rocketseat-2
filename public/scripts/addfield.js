// procurar o botão
document.querySelector("#add-time")
.addEventListener('click', clonefield) 
// quando clicar no botão

//executar um ação
function clonefield() {
  // duplicar campos. Que campos ???
  const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  // limpar os campos. Que campos
  const fields = newfieldContainer.querySelectorAll('input')

  // para cada campo limpar
  fields.forEach(function(field) {
      // pegar o field no momento e limpa ele
      field.value = ""
  })
  //colocar na página. Onde ???
  document.querySelector('#schedule-items').appendChild(newfieldContainer)
}