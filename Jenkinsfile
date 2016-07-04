#!groovy

node {
    currentBuild.result = "SUCCESS"
    try {
       stage 'Checkout'
            checkout scm

       stage 'Test'
            sh 'node -v'
            sh 'npm prune'
            sh 'npm install'
            sh 'npm test'

       stage 'Functional test'
            sh 'mocha'

       stage 'Cleanup'
            echo 'prune and cleanup'
            sh 'npm prune'
            sh 'rm node_modules -rf'
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }

}
