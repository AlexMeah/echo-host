const app = require('express')();

app.set('trust-proxy', true);

app.get('/', (req, res ) => {
    res.send(req.hostname);
});

app.listen(process.env.PORT || 3000);