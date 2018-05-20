const { NODE_ENV, PORT } = process.env;

export const isProd = /pro?d/i.test(NODE_ENV);
export const port = PORT || '3325';
