def version = "1.0.${env.BUILD_NUMBER}"
pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                echo 'Building...'
                sh "echo ${version}"
                sh "docker build -t docker.copystrike.dev/ugdocs:${version} -t docker.copystrike.dev/ugdocs:latest ."
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
}