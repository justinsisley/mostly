# Silently run the build script
npm run build >/dev/null

SERVER_COMMAND="npm start >/dev/null"
TEST_COMMAND="jest src\/[^_]+\/__tests__\/e2e.js --config='{\"preset\": \"jest-puppeteer\"}'"

# Make concurrently run the server and tests at the same time
concurrently --kill-others --raw "$SERVER_COMMAND" "sleep 3 && $TEST_COMMAND"

# Clean up after ourselves
rm -rf dist

exit 0