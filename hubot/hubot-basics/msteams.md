## Create a botframework application
1. Navigate to https://dev.botframework.com/bots/new
2. Fill in the blanks
3. Click on Create Microsoft App ID and password
4. Save the AppId and the Password, you will need it later

## Create your hubot bot
In our case we will use a [Dockerfile](Dockerfile) to create the bot instance

Create your bot scripts as documented in https://hubot.github.com/docs/

## Deploy the bot
Use the [botframework adapter](https://github.com/Microsoft/BotFramework-Hubot) during the deployment. Don't forget to specify the **BOTBUILDER_APP_ID** and **BOTBUILDER_APP_PASSWORD** environment variables.

## Add the bot to your team channel

### Create the MS Teams application
To achieve it you have to package a team application in a zip file containing :
- A manifest.json file
- Some icons referenced by the manifest

#### Manifest.json sample

```json
{
    "$schema": " https://developer.microsoft.com/en-us/json-schemas/teams/v1.3/MicrosoftTeams.schema.json",
    "manifestVersion": "1.3",
    "version": "1.0.1",
    "id": "<ID provided by the MS App>",
    "packageName": "com.demo.mybot",
    "developer": {
        "name": "Laurent Gil",
        "websiteUrl": "",
        "privacyUrl": "",
        "termsOfUseUrl": ""
    },
    "name": {
        "short": "mybot",
        "full": "mybot from devops team"
    },
    "description": {
        "short": "Handle operational tasks",
        "full": "Handle operational tasks"
    },
    "icons": {
        "outline": "icon.png",
        "color": "icon-192x192.png"
    },
    "accentColor": "#525354",
    "bots": [
        {
        "botId": "<ID provided by the MS App>",
        "needsChannelSelector": false,
        "isNotificationOnly": false,
        "scopes": [
            "team",
            "personal",
            "groupchat"
        ],
        "supportsFiles": true
        }
    ],
    "permissions": [
        "identity",
        "messageTeamMembers"
    ]
}
```

### Add the application to your team
In MS Teams :
- Select your team
- Right click
- Click on managed team
- Click on the Applications tab
- On the bottom rigth corner click on Load a custom application

### Add authorization scripts

Read the documentation here : https://github.com/jayongg/TeamsHubot

## References
- https://github.com/Microsoft/BotFramework-Hubot
- https://docs.microsoft.com/en-us/microsoftteams/platform/resources/schema/manifest-schema
- https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/apps/apps-package#icons
- https://hubot.github.com/docs/