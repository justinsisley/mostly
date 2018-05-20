webpack-dev-server \
  --config ./scripts/config/webpack.dev.js \
  --history-api-fallback \
  --mode development \
  ./src/client/index \
  || exit 0 # Always exit successfully