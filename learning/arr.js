var pessoa = {
  nome: ['Bob', 'Smith'],
  idade: 32,
  sexo: 'masculino',
  interesses: ['música', 'esquiar'],
  bio: function() {
    alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
  },
  saudacao: function() {
    alert('Oi! Eu sou ' + this.nome[0] + '.');
  }
};


// Depois de salvar e atualizar, tente inserir alguns dos itens a seguir no console JavaScript no devtools do seu navegador:

// pessoa.nome
// pessoa.nome[0]
// pessoa.idade
// pessoa.interesses[1]
// pessoa.bio()
// pessoa.saudacao()

var nomeDoObjeto = {
  nomeMembro1: valorMembro1,
  nomeMembro2: valorMembro2,
  nomeMembro3: valorMembro3
};

