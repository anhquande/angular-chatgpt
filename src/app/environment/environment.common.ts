import { Environment } from './environment.model';
import { merge } from 'lodash';

const commonEnvironment: Environment = {
  production: false,
  openaiApiUrl: 'https://api.openai.com/v1/engines/davinci-codex/completions',
  openaiApiKey: 'your_development_openai_api_key', // replace with your actual OpenAI API key for development
};

export function createEnvironment(
  specificEnvironment: Partial<Environment>,
): Environment {
  return merge({}, commonEnvironment, specificEnvironment);
}
