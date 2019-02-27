## Create a Hubot script - part 2

Into the part 1 we learnt how to install Hubot and how to add a custom script. In this step you will create your first usefull command.


### Customize the hubot script

Edit the demo-script.js file

`vi ~/demo-script/src/demoscrit.js`

Add the following command- [Create a Hubot script - part 2](#create-a-hubot-script---part-2)
  - [Customize the hubot script](#customize-the-hubot-script)
  - [Add the dependancy to the request module](#add-the-dependancy-to-the-request-module)
  - [Install the](#install-the)
```javascript
var request = require('request');

    // hear message said in a room
    robot.hear(/deploy pet-clinic/i,function(res){
        // job url       
        const job_url='http://localhost:8080/job/pet-clinic/job/master/build'

        //res.send('i start to deploy pet-clinic');
        request.post({url: job_url}, (err,httpResponse,body) => {
            if (err) {
                return res.send('upload failed:', err);
              }
            return  res.send('Running the pet-clinic deployment');
        })
             .auth('admin', '569747beeffb19d5cad165c7907b6471', true);       
    });
```{{copy}}

### Add the dependancy to the request module

From the demo-script folder

`npm install request`{{execute}}

### Install the new script version

From the myhubot folder

`npm install ../demo-script`{{execute}}

### Start your bot

`./bin/hubot`{{execute}}

## Start your deployment

`deploy pet-clinic`{{execute}}
