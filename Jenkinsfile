pipeline {
    agent any

    triggers {
        cron('H/30 * * * *')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Login Test') {
            steps {
                bat 'npx playwright test tests/login.spec.ts'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**'
            archiveArtifacts artifacts: 'test-results/**'
        }
    }
}