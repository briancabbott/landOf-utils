

/*
  Commands to refresh a git-hub repo (also, this could/should? eventually use GitHub-Repository-Downloader)

  Docs:
    - https://help.github.com/en/articles/configuring-a-remote-for-a-fork
    - https://help.github.com/en/articles/syncing-a-fork

  Commands:
    - git remote add upstream <ORIGINAL-URL>
    - git fetch upstream
    - git checkout master
    - git merge upstream/master
    - git push

  NO! --- Just use this:

  git pull --rebase upstream master
*/
