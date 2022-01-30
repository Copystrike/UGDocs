def version = "1.0.${env.BUILD_NUMBER}"
pipeline {
    agent any

     environment {
        dockerImage = ''
        registry = "docker.copystrike.dev/ugdocs:${version}"
        registryCredential = "dockerhub"
    }

    stages {
        stage('build') {
            steps {
                echo "Building version ${version}..."
                script {
                    dockerImage = docker.build registry
                }
            }
        }

        stage('deploy') {
            steps {
                echo "Pushing to private registry docker.copystrike.dev..."
                script {
                    docker.withRegistry('https://docker.copystrike.dev', "${env.registryCredential}") {
                        dockerImage.push("${version}")
                        dockerImage.push("latest")
                    }
                }
            }
        }
    }
}