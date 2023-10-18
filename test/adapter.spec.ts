import { RepositorySync } from './mocks/repository-sync';

describe('@adapter', () => {
  let repositorySync: RepositorySync;

  beforeEach(() => {
    repositorySync = new RepositorySync();
  });

  test('Should adapt the response.', () => {
    const result = repositorySync.findPerson();

    expect(result).toEqual({ name: 'alvaro' });
  });

  test('Should adapt the request.', () => {
    const result = repositorySync.createPerson({ name: 'goli' });

    expect(result).toEqual({ nombre: 'goli' });
  });
});
