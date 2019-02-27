## Hubot official documentation

[Hubot documentation](https://hubot.github.com/docs/)

### Install the Hubot generator

`npm install -g yo generator-hubot`{{execute}}

### Create your Hubot bot

The script below will create a directory named  myhubot and install the bot inside it
```
    chmod 777 /root/.config /root/.config/insight-yo.json  
    mkdir myhubot
    cd myhubot
    yo hubot --owner="katacoda" --name="mybot" --adapter=campfire --description 'my first bot'
```{{execute}}

During the installation process you will be prompted to send feedback to Hubot. As this is a demo please answer no.

### Start your bot

You can start the bot from the myhubot directory in using the following command.

`./bin/hubot`{{execute}}

You are now in a shell used to communicate with the bot. You can try the following commands :

Ask for help
`mybot help`{{execute}}

Execute the ping command
`mybot ping`{{execute}}

To exit the bot you can :

- write exit
- ctrl + c