## Create a hubot script

The script below will create a folder named demo-script at the same level than your bot folder, and install the script template which will allow you to develop your first script.

During the installation process please keep the default value as it makes the demo easier. You just have to set the Owner value.

```
cd ..
mkdir demo-script
cd demo-script
yo hubot:script
```{{execute}}

## Remove deprecated file

`rm src/demo-script.coffee`{{execute}}

## Copy demo-script.js

To prepare the course i created the demo-script.js file.
Copy it to the script folder you just created.

```
cd ..
cp demo-script.js demo-script/src
```{{execute}}

If you which to read the file content you can execute :

`cat demo-script.js`{{execute}}

## Teach your bot

You will now use npm to install your hubot script from the folder demo-script. To say to your bot to use this script you have to edit the file external-scripts.json and add the line hubot-demo-script.

```
cd myhubot
npm install ../demo-script
vi external-scripts.json
```{{execute}}

Add `"hubot-demo-script"`{{copy}} to the list
Quit the vim editor (esc+:+w+q)

note: [vim commands](https://www.radford.edu/~mhtay/CPSC120/VIM_Editor_Commands.htm)

Remove deprecated file
`rm hubot-scripts.json`{{execute}}


## Start your bot
`./bin/hubot`{{execute}}

You are now in a shell used to communicate with the bot. You can try the following commands :

`mybot hello`{{copy}}
`can you hear me`{{copy}}

To exit the bot you can :

- write exit
- ctrl + c