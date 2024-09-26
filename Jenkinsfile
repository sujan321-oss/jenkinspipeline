pipeline {
    agent any
    stages {
        stage ("Build") {
            steps{
                git branch : 'main' , url: 'https://github.com/sujan321-oss/jenkinspipeline.git'

                dir("application") {
                    sh 'docker build -t server .'
                }

            }
        }  
        
        stage ("runapp_stage_environment"){
            steps{
                    sh 'docker remove nodeproj | true'
                    sh 'docker run -d -p 8001:8001 --name nodeproj  server'    
            }

        }
        
    }


     post {
  
        success {
            sh 'echo "sucessful"'
        }
        failure {
      
            sh 'echo "failed"'
        }
    }

}