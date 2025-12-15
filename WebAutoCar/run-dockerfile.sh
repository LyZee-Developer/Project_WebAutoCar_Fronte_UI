#!/bin/bash
echo "processing run the dockerfile .. 🏃🏃 "
docker build -t webheng-img -f dep.Dockerfile .
docker login
echo " ▶️ Input you token from docker hub .."
if [[ -f "docker-version.log" ]]; then
    echo "-------------------------"
    cat docker-version.log
    echo "-------------------------"
fi

read -p "Please input your version of token v1.0.0 | v2.0.1 ..." version
echo "curently version of docker $version " >> docker-version.log
docker tag webheng-img lsdockers/heng-auto:$version
docker push lsdockers/heng-auto:$version
