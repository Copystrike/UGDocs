pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    echo 'Building...'
                    // TAG = VersionNumber(versionNumberString: '${BUILD_DATE_FORMATTED, "yyyy"}-dev-${BUILDS_ALL_TIME}')
                    sh 'docker build -t docker.copystrike.dev/ugdocs:1.0 -t docker.copystrike.dev/ugdocs:latest .'
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