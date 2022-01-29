pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    echo 'Building...'
                    sh 'docker build -t docker.copystrike.dev/ugdocs:$BUILD_NUMBER -t docker.copystrike.dev/ugdocs:latest .'
                }
            }
        }
        stage('deploy') {
            steps {
                echo 'Pushing to docker.copystrike.dev...'
                sh 'docker push docker.copystrike.dev/ugdocs:$TAG'
                sh 'docker push docker.copystrike.dev/ugdocs:latest'
            }
        }
    }
}