## Dockerized Frontend and Backend Test App

## Installation  

**1. Clone or download the repository and enter its folder**
```
git clone https://github.com/arabhossain/UnTu.git
```

**2. Run the installation script (it may take up to 10 minutes)**
```
make install
```

**3. Restart the node container.**
```
# Make command
make rn

# Full command
docker-compose restart node

#please find Makefile for more shortcut commands
``` 

Open [http://localhost:8080](http://localhost:8080) url in your browser. 

_If you see 502 error, just wait a bit until ```npm install && npm dev``` process will be finished (Check the status with the command ```docker-compose logs node```)_
