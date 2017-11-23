# Spring Boot CRUD Project with ReactJS Frontend in a Docker Container
> A Sampe App for modern CRUD developed with Spring Boot on the backend with ReactJS Frontend.It also demonstrates how to get real time push back updates through rabbitmq,how to handle stale data with spring data rest  and caching with redis. Everything running inside  docker containers.

    Tech Stack Used:Spring Data Rest, RabbitMQ,WebSocket, Caching, Redis Fabric8,Webpack

## Quickstart -This Doc covers the docker branch, please switch to the docker branch before reading any further.
To run the app you just need to:

    git clone https://github.com/kazi-imran/springboot-react-rabbitmq-docker-redis.git 
    git checkout docker
    mvn clean package docker:build
    mvn docker:run
To check everything is running you can:

    # Visit the homepage
    http://localhost:8080
    
    # Click on Customer Tab.
    # Click on LoadCustomers.
    # Reload the page or click on customers again 
    # You can also create new customers by clicking add customer
    
   
## Docker Conatiners
When the application starts, 3 docker containers pops up:
    
    1. The application itself.(A spring boot application running on openjdk in a container)
    2. A rabbitmq container 
    3. A redis container
    
It's a maven project and the docker containers are configured using [fabric8io plugin](https://dmp.fabric8.io/)

## RabbitMQ
When we are talking about updates in a crud app, we are talking about 3 scenarios.They are -

    # Updating the list,when an entity is created
    # Updating the list,when an entity is deleted
    # Updating an entity,when an entity contains stale data, and another user updates that stale entity 

Push back messaging covers the first 2 scenarios, and in case of stale data update , a feature of [spring data rest](https://projects.spring.io/spring-data-rest/) has been used. Spring data rest contains built in [E-Tag conditional update ](https://spring.io/guides/tutorials/react-and-spring-data-rest/#react-and-spring-data-rest-part-3). Basically, it acquires  optimistic lock using [javax.version](https://docs.oracle.com/javaee/5/api/javax/persistence/Version.html). Combined with that, any PUT request with header 'If-Match' and entity versioning information, Spring data rest checks if the updated information is stale, if the data is stale spring data rest sends a 412. rejecting the updated entity. In that case, we have to fetch the updated information and try updaing it again,Pretty much everything to do with stale data update is happening inside the frontend part, cause spring data rest already provides that provision out of the box. The rabbitmq container is preconfigured(see [rabbitmqdockerfile](https://github.com/kazi-imran/springboot-react-rabbitmq-docker-redis/blob/docker/src/main/docker/RabbitMQDockerfile)) with 3 plugins -rabbitmq_management,rabbitmq_stomp and rabbitmq_web_stomp.


## Caching
For caching we are using redis. Here we have a redis docker container which acts as our caching storage. Through maven config we are conntecting our spring boot container with redis container. Other than that, data is cached through Spring caching.

## Frontend-React.js

Most of the coding for this app is done inside the frontend part. It uses react , redux-form, react-router,websocket, webpack etc.

