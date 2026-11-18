#!/bin/bash
# 앱 서버(bun server.js) 만 종료 — MongoDB / VSCode 는 건드리지 않음.
pkill -9 -f "poen_rhs/server/server.js"
echo "[kill_server] server.js 종료 완료"
