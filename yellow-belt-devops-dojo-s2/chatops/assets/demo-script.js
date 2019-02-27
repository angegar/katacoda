// https://hubot.github.com/docs/scripting/
module.exports = function (robot) {

    // respond messages addressed to the bot
    robot.respond(/hello/i,function(res){
        // reply to the person who send the message
        return res.reply('Hello world');
        
    });

     // respond messages addressed to the bot
     robot.respond(/your name/i,function(res){
        // reply to the person who send the message
        return res.reply('My name is demo bot');
        
    });

    // hear message said in a room
    robot.hear(/can you hear me/i,function(res){
        // send message back to the room
        return res.send('Yes i can');
    });

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
}