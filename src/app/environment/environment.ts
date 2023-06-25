import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  openaiApiKey: 'your_openai_api_key', // will be replaced with local environment or pod environment
  openaiApiUrl: 'https://api.openai.com/v1/engines/davinci-codex/completions',
};
