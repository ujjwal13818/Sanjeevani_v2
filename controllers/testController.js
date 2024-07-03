const express = require('express');
const testController = (req , res) => {
    res.status(200).json({
        message: "hello",
    })
}

module.exports = {testController};