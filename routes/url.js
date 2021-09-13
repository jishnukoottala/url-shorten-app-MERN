const express = require("express");
const router = express.Router();

const { addUrl, getUrl} = require("../controllers/url");


router.post("/", addUrl);

router.get("/", getUrl)


module.exports= router;