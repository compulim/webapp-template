import './config';
import server from './server';

const port = process.env.PORT || 4000;

server({ port });
