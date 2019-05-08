import express from 'express';
import path from 'path';
import render from 'UTILS/render';
import fs from 'fs';

const app = new express();
app.use( express.static(path.resolve(__dirname , 'dist')) );
app.get('/*', (req, res) => {

    // res.send(render());
    const manifest = JSON.parse(fs.readFileSync(path.resolve(__dirname , './dist/manifest.json')));
    res.send( render( req.url , manifest) );

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))