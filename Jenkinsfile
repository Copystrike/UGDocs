def version = "1.0.${env.BUILD_NUMBER}"
pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS=credentials('dockerhub')
    }

    stages {
        stage('build') {
            steps {
                echo 'Building version ${version...'
                sh "docker build -t docker.copystrike.dev/ugdocs:${version} -t docker.copystrike.dev/ugdocs:latest ."
            }
        }
        stage('Login to nexus docker') {
            steps {
                echo 'Logging in to nexus docker'
                sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin docker.copystrike.dev"
            }
        }
        stage('deploy') {
            steps {
                echo "Pushing to private registry docker.copystrike.dev..."
                sh "docker push docker.copystrike.dev/ugdocs:${version}"
                sh "docker push docker.copystrike.dev/ugdocs:latest"
            }
        }
    }

    post {
        always {
            sh 'docker logout docker.copystrike.dev'
        }
    }
}