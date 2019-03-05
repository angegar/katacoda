#!/bin/bash

[ -d ~/demo-script ] && cd ~/demo-script && \
[ -f ~/demo-script/src/demo-script.js ] && \
grep -q hubot-demo-script ~/myhubot/external-scripts.json  && \
[ -d ~/myhubot/node_modules/hubot-demo-script ] && echo 'done'