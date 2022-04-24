set -e

git checkout development

git add -A
git commit -m "Push source code"
git push origin development:development