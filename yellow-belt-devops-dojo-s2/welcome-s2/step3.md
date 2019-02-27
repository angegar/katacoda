
The **Yellow Belt DevOps Dojo - Stripe 2** has been designed to ensure that as you progress through the module labs on the curriculum, you will be using your own dedicated copy of the "Pet Clinic" application.

As you work throughout the labs, your progress will be saved to your own copy of the Pet Clinic applications' Git repository. You can consider this copy a sandbox if you will, where you can learn, evaluate, try things out and hopefully have some fun safe in the knowledge that you won't impact any other learners.

As we previously noted the environment for **Yellow Belt DevOps Dojo - Stripe 2** is completely separate to the environment for **Yellow Belt DevOps Dojo - Stripe 1**. Aside from some noted exceptions you can take the modules in any order from any Stripe in support of your personal learning objectives.

However with great power, comes great responsibility. There is a process to set up the environment we need you to follow. The process, apologies in advance, is in itself a learning opportunity that of learning about GitHub repositories.

### Copy the Pet Clinic application

Usually, when you want to make a copy of a GitHub repository for you to edit, you use the **fork** function. Forking is the process of making a copy of a Git repository into another account (in this case to your account) so that you can add, edit or delete the content in your copy of the repository without impacting any users of the source repository.

In order to further isolate ourselves from the original pet clinic repository, we won't actually use a fork. Instead, we will create a disconnected copy of the repository under your GitHub user account.

* Run the following script to copy the Pet Clinic Stripe 2 repository.
(just click on the text below and the command will be run into the Katacoda window - there's no need to copy/paste or type it out yourself; though you might find that manually typing the commands in helps build familiarity [and refine troubleshooting skills when you make typos])

  `./copy-pet-clinic-stripe2.sh`{{execute}}

The script will ask you for three things your

- github.dxc.com user name (your dxc shortname or Global Pass ID)
- github.dxc.com Personal Access Token (see below for instructions if you need to generate one):
- e-mail address

💡 **TIP**: 🦊 Firefox user? Use `CTRL`+`INS` / `SHIFT`+`INS` to copy/paste your Personal Access Token in the window.

### Generate Personal Access Token

1. Log in to [github.dxc.com](https://github.dxc.com)
2. On any GitHub page, click your profile icon at the top right and then click Settings.
3. On the sidebar menu, click Developer settings and then click Personal access tokens.
4. Click Generate new token.
5. Add a Token description of your choice.
6. Select `repo` so that the token can read/write in your repository and `admin:repo_hook` so that it can update GitHub repository web hooks. Make sure to select everything within those scopes. 
7. Click Generate token.
8. Click the clipboard icon to copy the token in your clipboard.
9. **Make note of the personal access token**. This token will be used throughout the Yellow Belt DevOps Dojo. Note that it is OK if you loose it, as you can always generate a new one.
