## Google Docs Clone

An application similar to google docs with moderate text-editing power built using React, Quill, Socket.io, and MongoDB.

## Project Screen Shot(s)

![Google Docs](/screenshot.png?raw=true "Google Docs Clone")


## Installation and Setup Instructions 

Clone down this repository. You will need `node`, `npm`, and `mongodb` installed globally on your machine.
A guide to installing mongodb on your machine can be found [here](https://docs.mongodb.com/manual/administration/install-community/)

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Client:

`npm start`  

To Start Server:

`navigate to /server directory`
`npm run devStart`

To Visit App:

`localhost:3000`  

## Reflection

This was a project built over a couple days to familiarize myself with socket.io and mongodb. I set out to build an application that mimics google docs. The challenging part of this project was having document changes persist from one user to another. Another thing that I found very interesting (and I had not yet done after years of development) was using media queries to change the print format of the document. Since I've rarely encountered a situation where I need to properly print the document in an application, it was cool to tinker with that and format the page. Some of the technologies used (aside from mongo and socket.io) were react-router, Quill, UUIDV4, and mongoose. 
