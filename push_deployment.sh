set -e

git checkout main

cd dist
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f https://github.com/moedayraki/moedayraki.github.io.git main
cd -