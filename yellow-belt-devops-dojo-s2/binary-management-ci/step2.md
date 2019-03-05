**Dan** has been working hard on developing features requested by **Paulo** and testing them locally.

**Previously**

As we learned in the **Continuous Integration module** of the **Yellow Belt DevOps Dojo - Stripe 1**, Dan and the team were developing features on separate branches, sometimes for weeks at a time. They would then commit to the source code management system.

This was followed by a deployment phase that typically took 1 to 2 days, during the deployment phase the release manager worked with the team to gather and merge the changes from all the team members into a single master branch. This process took time and often resulted in some rework/refactoring of some of the code to make it work together.

Once the release manager was happy, he authorized to the team to produce a package from the code, they
entered a "code freeze" phase until a working build was produced and deployed for the QA/Testing team.

**Now** 

With the help of **Chun's** coaching the team have now applied the principle of working in small batches while building quality into the applications using with continuous testing.

All the developers have been continuously integrating to trunk (master branch) frequently. They have been using short lived (one to several days) feature branches which are quickly merged to master when the associated feature is implemented or the associated bug is fixed.

Each and every commit triggers the continuous integration pipeline automatically, which builds and run automated tests. The pass/fail results are made available as part of the feature branch / pull request.

Dan (or the lead reviewing) will not merge to master if any of those checks fail.

The team now want to ensure that every build is tagged, that every artifact produced is versioned and sent to the binary package manager Artifactory.

Note: With the use of tagging and versioning, anyone on the team can retrace back the changes as and when they need to.

This is **Binary Management - Continuous Integration**.

The remainder of this lab is an interactive exercise designed to allow you join the Pet Clinic team as they work to add Binary Management to their continuous integration pipeline.