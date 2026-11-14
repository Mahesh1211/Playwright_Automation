pipeline {
    agent any

    triggers {
        cron('H */6 * * *')
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
}