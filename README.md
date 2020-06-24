# Expresslize

A simple and minimal functional boilerplate for Express and Sequelize ORM

## Setup

 1. Rename *.env.example* to *.env* and set your DB credentials
 2. Install dependencies with *npm install* or *yarn install*
 3. Run *npm run start* or *yarn run start*
 4. [Get creative!](https://www.youtube.com/watch?v=9C_HReR_McQ)

## Folder Structure
![Express Tutorial Part 4: Routes and controllers - Learn web ...](https://mdn.mozillademos.org/files/14456/MVC%20Express.png)

    //All configuration files for any other installed package
    config/
    
    // Handler for all business logic
    controllers/
    
    // Model Schema for db tables
    models/
    
    // Config all routes/endpoints for HTTP Request
    routes/
    
    // General comunication with database using Sequelize Methods
    services/
    
    // validators and error handlers using Joi and Boom by @hapi
    utils/
