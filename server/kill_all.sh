#!/bin/bash
# 앱 서버(bun server.js) + MongoDB 만 정확히 종료.
# 주의: 'pkill -f node' / 'pkill -f npm' / 'killall bun' 은
#       VSCode(=node/electron) 까지 죽이므로 절대 쓰지 말 것!

# 앱 서버 — bun 으로 실행된 server.js 프로세스만 매칭
pkill -9 -f "poen_rhs/server/server.js"

# MongoDB 데몬
pkill -9 -f "mongod"

echo "[kill_all] server.js + mongod 종료 완료"
