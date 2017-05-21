const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var useragent = require('express-useragent');
app.use(useragent.express());

app.get("/api/whoami", (req, res) => {
    const remoteAddressArr = req.connection.remoteAddress.split(":");
    const ip = remoteAddressArr[remoteAddressArr.length -1];
    const operatingSystem = req.useragent.platform +" "+ req.useragent.os;
    const [locale] = req.headers["accept-language"].split(",")
    res.send({
        "ipaddress": ip,
        "language": locale,
        "software": operatingSystem
    });
});

app.listen(port, () => console.log(`Example app listening on ${port} !`));