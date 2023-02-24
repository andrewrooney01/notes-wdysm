## how to push live updates
### Creates a new branch based on your current branch
## git checkout -b 
### git add .
### git commit -m "Your commit message"
### git push -u origin feature-branch [push to remote repo]
## In your GitHub repository, create a pull request (PR) from your feature branch to the main branch
## After the PR is reviewed and approved, merge it into the main branch.
### git checkout main
### git pull origin main
### git merge feature-branch
### git push origin main
