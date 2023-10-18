import { adapter } from '../../src/adapter.decorator';
import { ResponseAdapter } from './response-adapter';
import { RequestAdapter } from './request-adapter';
import { ModelUi } from './model-ui';

export class RepositorySync {
  @adapter({ response: ResponseAdapter })
  findPerson(): ModelUi {
    return { nombre: 'alvaro' } as any;
  }

  @adapter({ request: RequestAdapter })
  createPerson(modelUi: ModelUi) {
    return modelUi;
  }
}
