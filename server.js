// import express from 'express'
// import React from 'react'
// import ReactDOMServer from 'react'
// import {HomePage} from './src/components/HomePage/HomePage.js'


const express = require("express")
const React = require('react')
const ReactDOMServer = require('react')
const HomePage = require('./src/components/HomePage/HomePage')


const app = express()
app.set("view engine", "ejs");
app.set("views", "./views");


const startServer = () => {
    app.listen(3000)
}

// check how its done in job crawler

app.get("/", (req, res) => {

    const generatedHTML = ReactDOMServer.renderToString(
        React.createElement(HomePage, props)
    )

    res.render("home", { generatedHTML })
})

app.get("/game", (req, res) => {
    res.send("GAME SUBPAGE")
})

startServer()