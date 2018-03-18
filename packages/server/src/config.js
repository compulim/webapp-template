import { config } from 'dotenv';

config();

if (typeof process.env.DEBUG === 'undefined') {
  process.env.DEBUG = '*';
}
