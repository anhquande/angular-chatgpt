import { createEnvironment } from './environment.common';
import { Environment } from './environment.model';

export const environment: Environment = createEnvironment({
  production: false,
});
