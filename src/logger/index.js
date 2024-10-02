import Pino from 'pino';

const customTimestamp = () => `,"time": "${new Date().toISOString()}"`;

export default new Pino({
    enabled: true,
    level: 'info',
    timestamp: customTimestamp,
})