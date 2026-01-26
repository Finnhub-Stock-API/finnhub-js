if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    exit
fi

# Check if NPM_TOKEN is set, if not try to use .npmrc or prompt for login
if [ -z "$NPM_TOKEN" ]; then
    if [ ! -f "$HOME/.npmrc" ] && [ ! -f ".npmrc" ]; then
        echo "NPM_TOKEN not set and no .npmrc found. Running npm login..."
        npm login
    fi
else
    # Use token from environment variable
    echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
fi

rm -rf node_modules
npm install
npm run build
npm publish --access public

# Clean up .npmrc if it was created from NPM_TOKEN
if [ ! -z "$NPM_TOKEN" ] && [ -f ".npmrc" ]; then
    rm .npmrc
fi

git add -A
git commit -m "update v$1"
git push origin