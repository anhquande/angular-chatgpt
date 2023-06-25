import { Environment } from './environment.model';
import { merge } from 'lodash';

const commonEnvironment: Environment = {
  production: false,
  useMockOpenai: false,
  mockOpenaiUrl: '',
  openaiOrganizationId: 'your_openai_organization_id',
  openaiApiKey: 'your_development_openai_api_key', // replace with your actual OpenAI API key for development
};

export function createEnvironment(
  specificEnvironment: Partial<Environment>,
): Environment {
  return merge({}, commonEnvironment, specificEnvironment);
}
