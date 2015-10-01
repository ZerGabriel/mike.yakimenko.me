#!/bin/bash -e

# commit messege
commit_message="$1"

# git actions
git add . -A
git commit -m "$commit_message"
git push

# publish command
shipit
