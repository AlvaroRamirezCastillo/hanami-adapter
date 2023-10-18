import { adapterAsync } from '../../src/adapter-async.decorator';
import { ResponseAdapter } from './response-adapter';
import { RequestAdapter } from './request-adapter';
import { ModelUi } from './model-ui';

export class RepositoryAsync {
  @adapterAsync({ response: ResponseAdapter })
  findPerson(): Promise<ModelUi> {
    return Promise.resolve({ nombre: 'alvaro' }) as any;
  }

  @adapterAsync({ response: ResponseAdapter })
  findPersonFaild(): Promise<ModelUi> {
    return Promise.reject('Faild!') as any;
  }

  @adapterAsync({ request: RequestAdapter })
  createPerson(modelUi: ModelUi) {
    return Promise.resolve(modelUi);
  }
}