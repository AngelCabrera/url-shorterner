const router = require('express').Router();
const Url = require('../models/Url')
const dns = require('dns');

router.get("/api/shorturl/:number", function (req, res) {
  Url.findOne({ 'shortlink': req.params.number }, (err, url) => {
    if(err) res.send("Hay problemas con este link, crea uno nuevo");
    else 
      if(url)
        if(url)
        res.redirect(url["url"]);
      else
          res.send("This url doesn't exist :(");
  });
});

router.post("/api/shorturl/new", async(req, res) => {
  const { url } = req.body;
  const urlRegex = /https:\/\/www.|http:\/\/www./g;
  const urlParsed = url.replace(urlRegex, '');
  dns.lookup( urlParsed, (err, address, family) => {
    err ? res.json({"error": "Your url address is bad formed"}) : onWellFormed()
  });
  /*const newLink = new Link({ url });
  await newLink.save().then( result =>
  res.json(result));*/
  function onWellFormed(){
    Url.find()
      .exec()
      .then(urls => {
        const shortlink = urls.length;
        const newUrl = new Url({ url, shortlink: urls.length});
        const checkDatabase = urls.filter( (d) => d["url"] === url);
        if( checkDatabase.length === 0)
          newUrl.save().then(res.json({url, shortlink}));
        else
          res.json({ "url": checkDatabase[0].url, "shortlink": checkDatabase[0].shortlink });
    }); 
  }
});


module.exports = router;