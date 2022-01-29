def VERSION_FORMAT='1.0.${BUILD_NUMBER}'

pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                script {
                    echo 'Building...'
                    sh 'docker build -t docker.copystrike.dev/ugdocs:${VERSION_FORMAT} -t docker.copystrike.dev/ugdocs:latest .'
                }
            }
        }
        stage('deploy') {
            steps {
                echo 'Pushing to private registry docker.copystrike.dev...'
                sh 'docker push docker.copystrike.dev/ugdocs:${VERSION_FORMAT}'
                sh 'docker push docker.copystrike.dev/ugdocs:latest'
            }
        }
    }
}