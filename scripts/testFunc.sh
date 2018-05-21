SERVER_COMMAND="NODE_ENV=production babel-node src/server/index.js >/dev/null"
TEST_COMMAND="jest src\/[^_]+\/__tests__\/func.js $1 --env=node"

# Make concurrently run the server and tests at the same time
concurrently --kill-others --raw "$SERVER_COMMAND" "sleep 3 && $TEST_COMMAND"

exit 0