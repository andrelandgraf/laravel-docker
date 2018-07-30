// Configuration variables from .env
const port = process.env.PORT || '8080';
const appUrl = process.env.APP_URL || 'http://localhost';

// Export variables
export {port, appUrl};