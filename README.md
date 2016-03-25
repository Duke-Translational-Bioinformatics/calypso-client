# Calypso Client
This is the client of Calypso. It is a pure angular applicaiton. The development environment requires nodeJS.

### Table of contents
- [Installation](#installation)
- [Deployment](#deployment)
- [Master](#master)
- [Tests](#tests)

## Installation
1) Install Node. The dev enviorment requires a Node to be installed.
Installation instructions for Node can be found at http://www.nodejs.org.

2) Ensure that ```npm``` (Node Package Manager) is available on the command
line. It ships with 
Node and should be installed. 

3) Install Ruby and RVM (Ruby Version Manager) - this is available at 
http://installrails.com/steps/install_rails. Ensure that the command ```gem``` is
available on the command line.

Run the following commands from the working directory:
```
npm install
npm install -g bower
bower install
gem install compass
```

## Deployment

```
grunt serve
```
Will run a development envionrment on localhost:9000, you can change the server paths in the bower.json document.

```
grunt serve:dist
```
Will compile the app and serve the compiled app at localhost:8080.


```
grunt
```
Will test and run a production envionrment locally on localhost:8080

## Master
When commiting to master, circle will run tests and auto deploy to: http://calypso-client.s3-website-us-west-2.amazonaws.com/#/

Shortened url: http://tiny.cc/dukecalypso

## Tests
When creating a new view be sure to make an e2e test of the page. This will run a phantomjs browser for an end-to-end test.
