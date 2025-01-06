import Environment from "./env";

export const environment: Environment = {
    apiUrl: process.env['API_URL'] || '',
    token: process.env['APP_TOKEN'] || ''
};
