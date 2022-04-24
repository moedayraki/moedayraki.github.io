set -e

npm run build

cd dist

git init
git checkout main
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f https://github.com/moedayraki/moedayraki.github.io.git main
cd -