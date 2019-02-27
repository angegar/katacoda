## Create a Hubot script

Hubot provides us with a yeoman command to generate a script repository from a template. We will use it to create a folder named - demo-script - at the same level than your bot directory.

During the installation process please keep the default value as it makes the demo easier. You just have to set the Owner value.

`mkdir ../demo-script; cd ../demo-script; yo hubot:script`{{execute}}

## Remove deprecated file

The current template version comes with sample as deprecated file so let's remove it.

`rm src/demo-script.coffee`{{execute}}

## Create a custom script

To prepare the course i created the demo-script.js file which contains some useless bot commands.

Copy the file to the script folder **demo-script**.

`cp ../demo-script.js ../demo-script/src`{{execute}}

If you which to read the file content you can execute :

`cat ../demo-script/src/demo-script.js`{{execute}}

> Note: Initally Hubot used the coffee script language, but now you can also use nodejs which seems to be the go forward solution.

## Add a custome script to your bot

You will now use npm to install your Hubot script from the folder **demo-script**.

`cd ../myhubot; npm install ../demo-script`{{execute}}

Then you will instruct your bot to use your custom script in editing the file **external-scripts.json** and in adding the line **hubot-demo-script**. You will note that each hubot script is prefixed with **hubot-**.

`vi external-scripts.json`{{execute}}

Add `"hubot-demo-script"`{{copy}} to the list
Save and close the file

If you are not familiar with the Vi commands you can read the [Vi cheat sheet](http://www.atmos.albany.edu/daes/atmclasses/atm350/vi_cheat_sheet.pdf)

Remove deprecated file
`rm hubot-scripts.json`{{execute}}

## Start your bot
`./bin/hubot`{{execute}}

You are now in a shell used to communicate with the bot. You can try the following commands :

`mybot hello`{{execute}}

`mybot your name`{{execute}}

`can you hear me`{{execute}}

To exit the bot you can :

- write exit
- ctrl + c

## Adapters

An adapter is an interface to the service you want your Hubot to run on. In this demo we used the default shell adapter which is useful to develop Hubot scripts. However it is not enough to create an operational chatbot, to achieve it you have to install additional adapters. You will find a documentation on how to install adapters in the [Hubot documentation](https://hubot.github.com/docs/adapters/)
