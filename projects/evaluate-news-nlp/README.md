# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

We'll be using the MeaningCloud system and need to procure an API key.

### Step 1: Signup for an API key
For the MeaningCloud API: You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

### Step 2: Create an .ENV file
In the ROOT directory of the project create a file named '.env' and include these two variables:

MEANINGCLOUD_API_KEY={insert your personal key here}
NLP_SERVER_PORT={a port to use} if none is specified the default will be 8085

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
