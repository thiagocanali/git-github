# Como usar o git e fazer seu primeiro commit <br> git, github e controle de versões
(**https://git-scm.com/downloads**)
<br>
<br>
status | add | commit | push
<br>

Iniciando um repositório:
<br>
git clone
<br>
git init
<br><br>
Checando o estado dos seus arquivos:
<br>
git status
<br><br>
Checando o que foi alterado nos arquivos:
<br>
git diff
<br>
git diff <arquivo>
<br>
git diff --check(checa por espaços em branco)
<br><br>
Adicionando arquivos para a área de seleção (salva mudanças feitas ):
<br>
git add . (adiciona todos os arquivos modificados)
<br>
git add <arquivo> (adiciona arquivo específico)
<br><br>
Move arquivos da área de seleção para a área de envio:
<br>
git commit -m "<mensagem>"
<br><br>
Muda de branch ao mesmo tempo que cria um:
<br>
git checkout -b <nome-do-branch>
<br><br>
Envia arquivos da área de envio:
<br>
git push
<br><br>
Problemas comuns
<br><br>
Efetuou git commit, mas se arrependeu:
<br>
Para reverter:
<br><br>
git reset HEAD~ (seus arquivos voltarão para fora da área de envio e seleção)
<br><br>
Você perdeu um commit, e agora seu repositório local está fora de sincronia com o repositório do git (mensagem de erro: ! [rejected] master -> master (non-fast-forward) Updates were rejected because the tip of your current branch is behind )
<br><br>
Restaurar commit perdido:
<br><br>
git reflog
<br><br>
git reset <commit-sha>
<br><br>
Modificar commit feito:
<br><br>
git commit--amend
<br><br>
Restaurar arquivo de um commit específico:
<br><br>
git checkout <commit-sha> -- <arquivo>
<br><br>
Precisa mudar de branch mas tem arquivos modificados que não estão pronto para um commit:
<br><br>
git stash
<br><br>
Visualiza todos as listas de arquivos modificados, adicionados ao stash:
<br><br>
git stash list
<br><br>
Restaura arquivos do stash:
<br><br>
git stash apply(último stash)
<br><br>
git stash apply stash@{2}(stash específico, selecionado por identificador numérico)
<br><br>
Deletou algum arquivo ou pasta acidentalmente:
<br><br>
git ls-files -d | xargs git checkout -- (restaura arquivos deletados enquanto mantém arquivos previamente modificados)
<br><br>
git checkout -- .(descarta arquivos modificados e restaura arquivos do último commit)
<br>
