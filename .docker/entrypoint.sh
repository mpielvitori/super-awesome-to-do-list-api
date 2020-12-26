#!/bin/sh

# test are not working on Docker alpine -> Spawned Mongo Instance PID is undefined
npm run lint && npm run test-coverage \
  && node --experimental-modules ./src/index.js
#  && nodemon --inspect=0.0.0.0:$NODEJS_DEBUG_PORT --experimental-modules ./src/index.js
#npm run lint \
#  && node --experimental-modules ./src/index.js
