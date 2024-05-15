FROM sapmachine:21-jdk-ubuntu-22.04

COPY . /home
WORKDIR /home/java
RUN apt update && apt install -y curl
RUN curl -L -o dd-java-agent.jar 'https://dtdg.co/latest-java-tracer'
RUN ./gradlew --no-daemon installDist
CMD JAVA_OPTS="-Ddd.agent.host=172.17.0.1 -Ddd.profiling.enabled=true -javaagent:dd-java-agent.jar" ./build/install/movies-api-java/bin/movies-api-java
