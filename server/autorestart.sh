#!/bin/bash

while [ 1 ]; do
    pid=$(ps -ef | grep "nodemon" | grep -v 'grep' | awk '{print $2}')

    if [ -z "$pid" ]; then
        if [ "$count" -lt 10 ]; then
            echo "restart server start"
            /home/xmessiahfool/job/poen/poen_rhs/server/start_server.sh
        fi
    fi

    sleep 2
done

