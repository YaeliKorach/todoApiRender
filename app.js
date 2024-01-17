const express = require('express');

const app = express();
const port = 3000; 

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');

app.get('/', async (req, res) => {

sdk.auth(process.env.RENDER_API_TOKEN);
const {data}=await sdk.getServices({limit: '20'});
res.json(data);
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});