pipeline {
    agent any 
    environment {
    	APP_NAME = "webui"
        GIT_SSH_KEY='chamith_github'
        DOCKER_IMAGE_LOCAL="testunited/testunited-${APP_NAME}"
        KUBE_NS="testunited-int"
        REGISTRY_CREDENTIALS="chamith_dockerhub"
    }
    
    stages {
   		stage('Define') {
   			steps {
   				script {
		        	version = sh(returnStdout: true, script: "gradle -q appVersion").trim()
		        	BUILD_TAG = "v${version}-b${BUILD_NUMBER}"
        			TESTUNITED_SESSION_NAME = "${env.JOB_BASE_NAME}-ci-build-${BUILD_TAG}"
        			DOCKER_IMAGE_REMOTE="${DOCKER_IMAGE_LOCAL}:${BUILD_TAG}"
		        }
   			}
   		}
   		
        stage('Build') { 
            steps {
                sh "gradle build"
            }
        }
        
        stage('Package') { 
            steps{
                sh "gradle docker"
            }
        }
        
        stage('Tag') {
            steps{
                sh "git tag ${BUILD_TAG}"

                sshagent(["${GIT_SSH_KEY}"]) {
                    sh "git push origin HEAD:master ${BUILD_TAG}"
                }
                
                sh "docker tag ${DOCKER_IMAGE_LOCAL} ${DOCKER_IMAGE_REMOTE}"
            }
        }
        
        stage('Publish') { 
            steps {
                script {
                    docker.withRegistry( '', REGISTRY_CREDENTIALS ) {
                        sh "docker push ${DOCKER_IMAGE_REMOTE}"
                    }
                }
            }
        }
        
        stage('Deploy') { 
            steps {
                sh "kubectl set image deployment/${APP_NAME} ${APP_NAME}=${DOCKER_IMAGE_REMOTE} -n ${KUBE_NS}"
            }
        }
    }
}