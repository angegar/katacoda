**C**hun suggests to **S**anthosh that the team use some of the team allocated for the improvement of daily work in their next Kaizen cycle to investigate the use of ChatOps .

This type of experimentation is actively encouraged by the third way of DevOps 

![Third Way](../../assets/yellow-belt-devops-dojo-s2/chatops/third-way.png)

The third way involves creating a culture that encourages two things:

    - Continual experimentation, which requires taking risks and learning from success and failure
    - Understanding that repetition and practice are the prerequisites to mastery

As the Pet Clinic team's DevOps practices mature they are using

- Continuous Integration for integrating, building, testing and packaging code. The binary packages when ready are then pushed to Artifactory. This is all happening from within the development process.

- Continuous Delivery for deploying the packages from Artifactory. Deployment to production only possible upon successful execution of system tests. Typically the push to production is triggered by a business rule or a manual approval.

- Continuous Deployment remains the teams long term objective. The practice of deploying into production without any human intervention subject of course to an extensive suite of automation tests being successfully run.

These practices require collaboration and communication. The Pet Clinic team has embraced MS Teams for that purpose, they are using MS Teams as their collaborative messaging platform to communicate with each other.

The Pet Clinic team now plan to investigate the potential of ChatOps to provide real time updates and alerts about the systems the work with and use via online chat in MS Teams' channels.