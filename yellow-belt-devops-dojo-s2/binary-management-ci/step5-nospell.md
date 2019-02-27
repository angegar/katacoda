## Adding Artifactory credentials in Jenkins credential store
* Open jenkins dashboard and click on `credentials` option available on the left side of page
* Click on `jenkins` option under store and then click on `Global credentials{unrestricted}`
* Click on `Add Credentials` option on the left 
* Select the option `username with password` from the dropdown from `kind` and `Scope` as `Global`
* Enter the Artifactory credentials in `Username` , `Password` and `ID` as `admin`{{copy}} , `password`{{copy}} , `Artifactory`{{copy}}       respectively.
* Click on `OK`.

## Publishing Artifacts

Add a stage in Jenkinsfile to publish the artifacts to Artifactory at https://github.dxc.com/{shortname}/pet-clinic-stripe2/blob/master/Jenkinsfile

* Around line 29 in the Jenkinsfile,copy the below content and add it in the Jenkinsfile
<pre class="file" data-target="clipboard">
  
  stage('Publish artifacts to artifactory') {
  steps {
      withCredentials([
       [$class: "UsernamePasswordMultiBinding", credentialsId: "Artifactory", usernameVariable: "Username", passwordVariable: "Password"]
      ]) {
      sh "curl -u${Username}:${Password} -T /var/jenkins_home/workspace/pet-clinic-stripe2_master-TXVVNQXOZK2C3FJJYDAFX3C7QPFM67XFMWUIGGAPIKOZZDYFNP6Q/target/petclinic-1.0.war http://[[HOST_SUBDOMAIN]]-8081-kitek04.environments.katacoda.com/artifactory/example-repo-local/org/springframework/samples/"   
      }
  }
} 
</pre>
