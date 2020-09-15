# Project Instructions

This is my version of the code for this project.

The goal of this project was to give me practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

It uses Natural Language Procesing from Meaning Cloud.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started (Webpack dev)

if running using Webpack Dev Server you need to run the server separately because webpack will be running on port 8080 (configurable in webpack.dev.js) and the server will be running on port 8085 (configurable in .env). To start the server from the root of the 'evaluate-news-nlp' folder use 'node ./src/server/server.js'. Start the webpack dev server in the usual fashion; 'npm run build-dev'.

See Lesson 4, Final Touches, concept 2, Fixing Our Functionality for more details.

## Setting up the API

We'll be using the MeaningCloud system and the API key is stored in the .env file.

More information on the Sentiment Analysis API is available at this [link](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1).

### Create an .ENV file
In the ROOT directory of the project create a file named '.env' and include these two variables:

    MEANINGCLOUD_API_KEY={insert your personal key here}
    NLP_SERVER_PORT={a port to use} if none is specified the default will be 8085