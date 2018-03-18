import { createServer } from 'http';
import { join } from 'path';
import Debug from 'debug';
import express from 'express';
import WebSocket from 'ws';

import Client from './client';

const debug = Debug('server');

export default function main({ port }) {
  const app = express();
  const server = createServer(app);
  const wss = new WebSocket.Server({ server });

  app.use(express.static(join(__dirname, '../../app/build')));

  wss.on('connection', ws => {
    const client = new Client(ws);
  });

  server.listen(port, () => {
    debug(`Listening to port ${ port }`);
  });
}
