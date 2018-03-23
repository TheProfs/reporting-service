#!/bin/bash

# Deploys to branch `production` from current branch

currBranch="$(git symbolic-ref --short HEAD)";

echo "\033[1;36m You are about to deploy to production! Enter 'PRODUCTION' to continue. \033[0m\n"

read reply

if [[ "$reply" = "PRODUCTION" ]]
  then
    echo "\033[1;34m Deploying to production from -current-branch.. \033[0m\n"
    git checkout master
    git checkout production
    git reset --hard origin/production
    git reset --hard origin/"${currBranch}"

    git add --all
    git commit -am"Auto deploy from "${currBranch}" branch using deploy-production script"
    git push origin production --force
    git checkout "${currBranch}"

  echo "\033[1;32m Succesfully deployed to production \033[0m\n"
else
  echo "\033[1;31m Invalid response. Production deployment cancelled \033[0m\n"
fi
