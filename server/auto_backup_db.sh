#!/bin/bash

while [ 1 ]; do
	sleep 3600
	./backup_db.sh
	rm -rf /home/poen/poen/backup/$(date '+%Y-%m-%d')_poenDB
	mv /home/poen/poen/backup/poenDB /home/poen/poen/backup/$(date '+%Y-%m-%d')_poenDB
	/usr/bin/find /home/poen/poen/backup -type f -ctime +30 -exec rm -rf {} +
	rm -f /home/poen/nohup.out
done

