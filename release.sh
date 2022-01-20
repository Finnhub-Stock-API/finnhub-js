if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit
fi

rm -rf node_modules
npm install
npm run build
npm publish --access public

git add -A
git commit -m "update v$1"
git push origin