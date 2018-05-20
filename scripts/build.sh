rm -rf ./dist

NODE_ENV=production webpack \
  --config ./scripts/config/webpack.prd.js \
  --mode production \
  ./src/client/index

NODE_ENV=production babel \
  ./src/server \
  --out-dir ./dist/server \
  --ignore '**/__tests__/**'