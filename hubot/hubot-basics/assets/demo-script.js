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
}