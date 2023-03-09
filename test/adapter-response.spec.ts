import { adapterAsyncResponse } from '../src/adapter-async-response';

class Target {
  name: string;
}

interface Adaptee {
  nombre: string;
}

class Adapter extends Target {
  constructor(adaptee: Adaptee) {
    super();
    this.name = adaptee.nombre;
  }
}

class TestClass {
  @adapterAsyncResponse(Adapter)
  findPerson() {
    return Promise.resolve({ nombre: 'alvaro' });
  }

  @adapterAsyncResponse(Adapter)
  findPersonFaild() {
    return Promise.reject('Faild!');
  }
}

describe('@adapterAsyncResponse', () => {
  let testClass: TestClass;

  beforeEach(() => {
    testClass = new TestClass();
  });

  test('Should adapt the response.', async () => {
    const result = await testClass.findPerson();

    expect(result).toEqual({ name: 'alvaro' });
  });

  test('Should return an error instead of adapting when the promise fails.', async () => {
    await expect(testClass.findPersonFaild()).rejects.toMatch('Faild!');
  });
})
