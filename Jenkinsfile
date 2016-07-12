#!groovy

node {
    currentBuild.result = "SUCCESS"
    try {
       stage 'Checkout'
            checkout scm
            token = "d5ecd46feb6a9049e0763db9c2a2d447e74cb9fb"
            sh 'curl -XPOST -H \
              "Authorization: token $token" \
              https://api.github.com/repos/EffectiveDevOpsWithAWS/helloworld/statuses/${git rev-parse --short HEAD} -d "{ \
                \"state\": \"pending\", \
                \"target_url\": \"https://example.com/build/status\", \
                \"description\": \"The build pending tests!\", \
                \"context\": \"continuous-integration/jenkins\" \
            }"'

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
