import { RepositoryAsync } from './mocks/repository-async';

describe('@adapterAsync', () => {
  let repositoryAsync: RepositoryAsync;

  beforeEach(() => {
    repositoryAsync = new RepositoryAsync();
  });

  test('Should adapt the response.', async () => {
    const result = await repositoryAsync.findPerson();

    expect(result).toEqual({ name: 'alvaro' });
  });

  test('Should adapt the request.', async () => {
    const result = await repositoryAsync.createPerson({ name: 'goli' });

    expect(result).toEqual({ nombre: 'goli' });
  });

  test('Should return an error instead of adapting when the promise fails.', async () => {
    await expect(repositoryAsync.findPersonFaild()).rejects.toMatch('Faild!');
  });
})
