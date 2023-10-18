import { Transformer } from './transformer';

export const adapterAsync = (
  { response, request }: { response?: any, request?: any }
) => (_target: any, _propertyName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;
  const transformer = new Transformer();

  descriptor.value = async function (...args: any[]) {
    let parameters = transformer.transformRequest({ args, request });
    const sourceModel = await originalMethod.apply(this, parameters);

    return transformer.transformResponse({ sourceModel, response });
  };

  return descriptor;
};
