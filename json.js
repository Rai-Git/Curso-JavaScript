//objeto javascript
contato = {nome: 'maria', email:'maria@gmail.com', fone:'(47)- 9856-9854'}
console.log(contato.nome)
console.log(contato.email)
console.log(contato.fone)

contatoJson = JSON.stringify(contato)
console.log(contatoJson)
console.log(contatoJson.nome)

//parse convert Json para objeto

contatoObj = JSON.parse(contatoJson)
console.log(contatoObj.nome)