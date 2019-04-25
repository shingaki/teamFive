I am not an expert with git but I will share the most common commands I use in git, such as: ‘creating my own branch’, ‘commit’, ‘merge’ and pushing changes.

This cheat sheet may need to be updated.

IMPORTANT NOTES:

1. Always create a branch from the master. Work on your branch and push your branch to git. Do not work on master. 
2. Create a pull request and if there aren’t any merge conflicts, you can merge your code. 
3. When there are merge conflicts, discuss with another team member about the conflicts before merging your code. 
4. If your local repo is not in a good state, you can always delete your local repo and clone again. 


I will not walk through the process of cloning your repo because I use ‘Intellij’ and my cloning process is different. I am not comfortable cloning from the command line. 
Prequisites: The repo has been cloned on your local. 

CREATING YOUR BRANCH: 

1. Make sure you on in the git directory of your local repo

            COMMANDS:

                git status —> may indicate that you are on the master branch
                git pull —> just a precaution to make sure you have everything from the git repo. You may see a message ’nothing to commit, working directory clean’
                git branch -a —> will list all the repos on your local. The branch with the asterisk will be the branch you are on. 
                git checkout -b <NAME OF YOUR BRANCH GOES HERE> origin/master —> you should see a message stating ’Switching to a new branch <YOUR BRANCH NAME>
                git branch -a —> you see the asterisk next to your branch name

PUSHING YOUR BRANCH TO GIT:

1. git status —> (your changes will be displayed in red text)
2. git add . -A (adds all changes to your local repo)
3. git status —> (your changes will be displayed in green text)
4. git commit -m’Description of your change’ (commits your changes)
5. git push -u origin <YOUR BRANCH NAME>

Now you can log into GIT and see your branch. You may need to give it a few seconds before you can see it. I’ve found that it does take more than 1 minutes to display but sometimes it will take a few seconds. You may need to select your branch from the dropdown. Once you select your branch, you can see when the commit looks place, usually nn seconds ago.





Once you have selected your branch from the dropdown, click on the ’New pull request’ button. 



Choose your branch in the ‘compare’ drop down box  (see below). Once you do this, the ‘Create pull request’ button will be available. 



Click on the ‘Create pull request’. 

You should see a message indicating if there are Merge Conflicts or not.  (There aren’t any branches, so I could not take a screenshot of this). 

************************REMEMBER, to always pull code before committing and push your branch to GITHUB.*******************

Usually, I identify a change that is in master that is not in my origin branch. A change someone made after I did my initial pull. This way once I merge my code with the current master repo, I can verify that the merge was successful. 

Here are the steps: 

Step 1: Need to stash your code.  git stash
Step 2. Need to pull down the most recent code from the gitHub repo. git pull
Step 3: Check which branch you are on (you should be on your own branch):  git status
Step 4: Now copy the release you need to get the branch you want to merge your branch into :  git merge origin/master
Step 5. Now you can see that your changes have been merged:  git log
            When you ‘git log’ you will get a list of the repos. At the top you should see (HEAD -> <YOUR BRANCH NAME>, origin/master) 
Step 6: Now you should  ‘stash pop’ your changes to merge them -  git stash pop

