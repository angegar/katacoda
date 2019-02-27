# Chat Ops - Module Plan

## Module Objectives

ChatOps refers to the use of workplace collaboration tools and ChatBots to automate software development and operational tasks. The primary objective of the "Introduction to ChatOps" module is to help you to understand the role ChatBots can play in establishing a culture of automation, measurement and sharing (CAMS) in a DevOps transformation.

The secondary objective is to give you an opportunity to virtually participate in a real world scenario to create a ChatBot in the Katacoda environment.

If you have not completed the Welcome module you should do so before continuing with the Introduction to ChatOps module.

## Learning Outcomes

By the end of the lesson, the learners should be able to

* Explain the role of ChatOps in supporting a culture of automation, measurement and sharing.
* Create a basic ChatBot using Hubot
* Add custom functions to a Hubot ChatBot
* Understand how to package, deploy a ChatBot to MS Teams.
* Access the services provided by a ChatBot from MS Teams.


## Learning Methodology

 :computer: A Katacoda lab to allow the learner explain the role of ChatOps in supporting a culture of automation, measurement and sharing, create a basic ChatBot using Hubot, add custom functions to a Hubot ChatBot, understand how to package, deploy a ChatBot to MS Teams and how to access the services provided by a ChatBot from MS Teams.

## Assessment - Pre Module

Complete the Welcome module of the **Yellow Belt DevOps Dojo - Stripe 2**.

### Assessment - Post Module

Completing the Katacoda lab acts as the assessment.

### Actors

| Module Actors                          | Role(s)                                                                    |
| -------------------------------------- | -------------------------------------------------------------------------- |
| [Chun](../story.md#chun-coach ":relative") | DevOps coach engaged to help the company and development team make the shift to a new way of working by mentoring, empowering and coaching the team. |
| [Paulo](../story.md#paulo-product-owner ":relative")       | Product Owner appointed to facilitate the change, experienced Agile practitioner with some exposure to DevOps tools and processes.             |
| [Santhosh](../story.md#santhosh-scrum-master ":relative") | Scrum Master participating in the DevOps transformation |
| [Adam](../story.md#adam-admin--site-reliability-engineer ":relative") | IT Admin representative participating in the DevOps transformation       |
| [Dan](../story.md#dan-developer ":relative")       | Developer representative participating in the DevOps transformation             |

### Story

As the Pet Clinic team progress with their DevOps transformation they have increased their use of 'DevOps' tooling in support of the transformation. Tools introduced include GitHub for source code management and version control, Jenkins for continuous integration and continuous delivery, and Artifactory for binary management.

In parallel to the adaption of tooling **P**aulo is encouraging the team to continue to work to evolve their culture. **C**hun states that in her opinion transforming the culture is just as important, if not more important as the introduction of new tooling in successful DevOps transformations.

The primary goal of the Pet Clinics DevOps transformation is to reduce the time it takes the Pet Clinic development team to deliver business value into production. The software delivered has to be defect free with problems being detected and corrected as early as possible in the development cycle. The adaption of DevOps promotes practices which enable and demand better communication and thus collaboration between development teams and IT Operations.

With **C**huns help and guidance the Pet Clinic DevOps transformation is focused on the introduction a Culture of Automation, Measurement and Sharing (CAMS). **D**an the developer and **A**dam the SRE have suggested the team evaluate and potentially use ChatOps in support of the desired CAM culture.

**C**hun agrees and suggests to **S**anthosh that the team use some of the team allocated for the improvement of daily work in their next Kaizen cycle to investigate the use of ChatOps .

This type of experimentation is actively encouraged by the third way of DevOps 

![Third Way](../../assets/yellow-belt-devops-dojo-s2/chatops/third-way.png)

The third way involves creating a culture that encourages two things:

    - Continual experimentation, which requires taking risks and learning from success and failure
    - Understanding that repetition and practice are the prerequisites to mastery

#### Guidelines

As the Pet Clinic team's DevOps practices mature they are using

- Continuous Integration for integrating, building, testing and packaging code. The binary packages when ready are then pushed to Artifactory. This is all happening from within the development process.

- Continuous Delivery for deploying the packages from Artifactory. Deployment to production only possible upon successful execution of system tests. Typically the push to production is triggered by a business rule or a manual approval.

- Continuous Deployment remains the teams long term objective. The practice of deploying into production without any human intervention subject of course to an extensive suite of automation tests being successfully run.

These practices require collaboration and communication. The Pet Clinic team has embraced MS Teams for that purpose, they are using MS Teams as their collaborative messaging platform to communicate with each other.

The Pet Clinic team now plan to investigate the potential of ChatOps to provide real time updates and alerts about the systems the work with and use via online chat in MS Teams' channels.

#### ChatOps

The term ChatOps is an amalgamation of Chat and Operations. ChatOps is a relatively new operational model which supports conversation-driven development.

In the ChatOps paradigm teams use a collaboration tool like Slack or MS Teams to work together in one or more chat rooms or channels. Team members enter commands and questions into the chat room, these are commands and questions for which ChatBots have been created to execute or to respond to via a series of custom scripts and plugins. ChatBots are sometimes referred to as Robots.

ChatBots should be within the context of the collaboration tool be considered as members of your team to which you can send a request and get an instant response.

The commands executed and questions responded by a ChatBot are only limited by your imagination, that is they are only limited by what you can put an API in front of. The services provided can range from commands to trigger code deployments, to questions that query application and system logs, to questions which query security event responses, to commands for logging issues and for team member notifications.

ChatOps allows development and operations teams to include their tools as active participants in their conversations, allowing them to collaborate in real time and to work faster in an agile manner to automate tasks. This form of conversation driven collaboration is changing how people work.

Teams that use ChatOps are constantly finding new and innovative ways of automating tasks. With ChatOps, work is shared and visible to all in a central place the channel in the teams collaboration tool.

#### ChatOps Main Components

ChatOps is comprised of three main components.

Collaboration tool: The chat application used by the team to work in. There are a number of chat platforms including MS Teams and Slack.

ChatBot: In the teams' collaboration tool the ChatBot acts as the interlocutor between the person making the request and the tools servicing the request. The ChatBot accepts requests from team members, then executes commands against or to retrieve information from integrated systems and tooling. There are a number of popular tools for creating ChatBots including Hubot, Lita and Cog.

Backend System integration: The backend system that the ChatBot interacts with. These backend can include

    JIRA for issue creation and tracking.
    GitHub for version control.
    Jenkins for continuous integration, delivery and deployment.
    Ansible, Terraform, Kubernetes, AWS, Azure and others for provisioning and infrastructure as code (IAC).
    Grafana for monitoring.

The potential for automation using ChatOps is truly limitless.

**S**anthosh allocates the time **D**an and **A**dam to investigate ChatOps in the teams next Kaizen event. The remainder of this lab contains the results of their experimentation with ChatOps.

# TO DELETE WHEN TRAINING MADE
## Katacoda Lab flow

Remainder of lab to be based on this content

[KataCoda](https://katacoda.com/lgil/courses/hubot) focus on Steps 1 to 3. 

Need to decide if 

- Authorization Scripts mentioned in Step 3 are to be included or not, if they are need more detail and to provide more context.
- If we want to use VIM editor, if so need to provide clear instructions as to how to do so and an alternative mechanism of updating the file for those that don't want to or are unable to do so.



[Repo](https://github.com/angegar/katacoda) pay particular attention to [https://github.com/angegar/katacoda/blob/master/hubot/hubot-basics/index.json](https://github.com/angegar/katacoda/blob/master/hubot/hubot-basics/index.json)