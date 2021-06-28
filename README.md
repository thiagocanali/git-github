# git-exemplo
aprendendo a usar o git
e controle de versões

<br>

Iniciando um repositório:
git clone
git init
Checando o estado dos seus arquivos:
git status
Checando o que foi alterado nos arquivos:
git diff
git diff <arquivo>
git diff --check(checa por espaços em branco)
Adicionando arquivos para a área de seleção (salva mudanças feitas ):
git add . (adiciona todos os arquivos modificados)
git add <arquivo> (adiciona arquivo específico)
Move arquivos da área de seleção para a área de envio:
git commit -m "<mensagem>"
Muda de branch ao mesmo tempo que cria um:
git checkout -b <nome-do-branch>
Envia arquivos da área de envio:
git push
Problemas comuns
Efetuou git commit, mas se arrependeu:
Para reverter:
git reset HEAD~ (seus arquivos voltarão para fora da área de envio e seleção)
Você perdeu um commit, e agora seu repositório local está fora de sincronia com o repositório do git (mensagem de erro: ! [rejected] master -> master (non-fast-forward) Updates were rejected because the tip of your current branch is behind )
Restaurar commit perdido:
git reflog
git reset <commit-sha>
Modificar commit feito:
git commit--amend
Restaurar arquivo de um commit específico:
git checkout <commit-sha> -- <arquivo>
Precisa mudar de branch mas tem arquivos modificados que não estão pronto para um commit:
git stash
Visualiza todos as listas de arquivos modificados, adicionados ao stash:
git stash list
Restaura arquivos do stash:
git stash apply(último stash)
git stash apply stash@{2}(stash específico, selecionado por identificador numérico)
Deletou algum arquivo ou pasta acidentalmente:
git ls-files -d | xargs git checkout -- (restaura arquivos deletados enquanto mantém arquivos previamente modificados)
git checkout -- .(descarta arquivos modificados e restaura arquivos do último commit)
