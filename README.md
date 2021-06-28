# git-exemplo
aprendendo a usar o git
e controle de versões

<br>

Iniciando um repositório:
<br>
git clone
<br>
git init
<br>
Checando o estado dos seus arquivos:
<br>
git status
<br>
Checando o que foi alterado nos arquivos:
<br>
git diff
<br>
git diff <arquivo>
<br>
git diff --check(checa por espaços em branco)
<br>
Adicionando arquivos para a área de seleção (salva mudanças feitas ):
<br>
git add . (adiciona todos os arquivos modificados)
<br>
git add <arquivo> (adiciona arquivo específico)
<br>
Move arquivos da área de seleção para a área de envio:
<br>
git commit -m "<mensagem>"
<br>
Muda de branch ao mesmo tempo que cria um:
<br>
git checkout -b <nome-do-branch>
<br>
Envia arquivos da área de envio:
<br>
git push
<br>
Problemas comuns
<br>
Efetuou git commit, mas se arrependeu:
<br>
Para reverter:
<br>
git reset HEAD~ (seus arquivos voltarão para fora da área de envio e seleção)
<br>
Você perdeu um commit, e agora seu repositório local está fora de sincronia com o repositório do git (mensagem de erro: ! [rejected] master -> master (non-fast-forward) Updates were rejected because the tip of your current branch is behind )
<br>
Restaurar commit perdido:
<br>
git reflog
<br>
git reset <commit-sha>
<br>
Modificar commit feito:
<br>
git commit--amend
<br>
Restaurar arquivo de um commit específico:
<br>
git checkout <commit-sha> -- <arquivo>
<br>
Precisa mudar de branch mas tem arquivos modificados que não estão pronto para um commit:
<br>
git stash
<br>
Visualiza todos as listas de arquivos modificados, adicionados ao stash:
<br>
git stash list
<br>
Restaura arquivos do stash:
<br>
git stash apply(último stash)
<br>
git stash apply stash@{2}(stash específico, selecionado por identificador numérico)
<br>
Deletou algum arquivo ou pasta acidentalmente:
<br>
git ls-files -d | xargs git checkout -- (restaura arquivos deletados enquanto mantém arquivos previamente modificados)
<br>
git checkout -- .(descarta arquivos modificados e restaura arquivos do último commit)
<br>
