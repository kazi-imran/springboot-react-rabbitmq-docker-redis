# Spring Boot CRUD Project with ReactJS Frontend in a Docker Container
> A Modern CRUD developed with Spring Boot on the backend with ReactJS Frontend.It also demonstrates how to get real time push back updates through rabbitmq,how to handle stale data with spring data rest  and caching with redis. Everything running inside  docker containers.

    Tech Stack Used:Spring Data Rest, RabbitMQ,WebSocket, Caching, Redis Fabric8,Webpack

## Quickstart
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
    
    #1. The application itself.(A spring boot application running on openjdk in a container)
    #2. A rabbitmq container 
    #3. A redis container
    
It's a maven project and the docker containers are configured using [fabric8io plugin](https://dmp.fabric8.io/)
When we are talking about updates in a crud app, we are talking about 3 scenarios.They are -

    # When an entity is created
    # When an entity is deleted
    # When an entity contains stale data, and another user updates that stale entity 

Push back messaging covers the first 2 scenarios, and in case of stale data update , a feature of [spring data rest](https://projects.spring.io/spring-data-rest/) has been used. Spring data rest contains built in [E-Tag conditional update ]https://spring.io/guides/tutorials/react-and-spring-data-rest/#react-and-spring-data-rest-part-3. 

### Running the backend
Run `StarterMain` class from your IDE.

### Running the frontend
Go to `src/main/frontend` and run `npm start`. (Run `npm install` before that if it's the first time)

Now we should work with `localhost:9090` (this is where we'll see our live changes reflected)
 instead of `localhost:8080`.

### Hot reloading
In the **backend** we make use of Spring DevTools to enable hot reloading, 
so every time we make a change in our files an application restart will
be triggered automatically.

Keep in mind that Spring DevTools automatic restart only works if we run the 
application by running the main method in our app, and not if for example we run 
the app with maven with `mvn spring-boot:run`.

In the **frontend** we use Webpack Dev Server hot module replacement 
through the npm script `start`. Once the script is running the Dev Server will be 
watching for any changes on our frontend files.

This way we can be really productive since we don't have to worry about recompiling and deploying
our server or client side code every time we make changes.




### Other ways to run the app
#### Run everything from Maven

    mvn generate-resources spring-boot:run

The Maven goal `generate-resources` will execute the frontend-maven-plugin to install Node
and Npm the first time, run npm install to download all the libraries  that are not 
present already and tell webpack to generate our `bundle.js`. It's the equivalent of running `npm run build` or `npm start` on a terminal.

#### Run Maven and Webpack separately (no hot-reloading)

    mvn spring-boot:run
In a second terminal:
    
    cd src/main/frontend
    npm run build

## Tech stack and libraries
### Backend
- [Spring Boot](http://projects.spring.io/spring-boot/)
- [Spring MVC](http://docs.spring.io/autorepo/docs/spring/3.2.x/spring-framework-reference/html/mvc.html)
- [Spring Data](http://projects.spring.io/spring-data/)
- [Spring Security](http://projects.spring.io/spring-security/)
- [Spring Test](http://docs.spring.io/autorepo/docs/spring-framework/3.2.x/spring-framework-reference/html/testing.html)
- [JUnit](http://junit.org/)
- [Mockito](http://mockito.org/)
- [AssertJ](http://joel-costigliola.github.io/assertj/)
- [Lombok](https://projectlombok.org/)
- [Orika](http://orika-mapper.github.io/orika-docs/)
- [Maven](https://maven.apache.org/)

### Frontend
- [Node](https://nodejs.org/en/)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Webpack](https://webpack.github.io/)
- [Axios](https://github.com/mzabriskie/axios)
- [Babel](https://babeljs.io/)
- [ES6](http://www.ecma-international.org/ecma-262/6.0/)
- [ESLint](http://eslint.org/)

---
