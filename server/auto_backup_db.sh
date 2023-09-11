#!/bin/bash
while [ 1 ]; do
	sleep 1800
	./backup_db.sh
	mv /home/poen/poen/backup/poenDB /home/poen/poen/backup/$(date +%Y)-$(date +%m)-$(date +%d)T$(date +%H):$(date +%M):$(date +%S)_poenDB
	/usr/bin/find /home/poen/poen/backup -type f -ctime +7 -exec rm -rf {} +
	rm -f /home/poen/nohup.out
	rm -f /home/poen/poen/poen_rhs/server/nohup.out
done

