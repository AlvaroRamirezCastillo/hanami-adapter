import { Transformer } from './transformer';

export const adapter = (
  { response, request }: { response?: any, request?: any }
) => (_target: any, _propertyName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;
  const transformer = new Transformer();

  descriptor.value = function (...args: any[]) {
    let parameters = transformer.transformRequest({ args, request });
    const sourceModel = originalMethod.apply(this, parameters);

    return transformer.transformResponse({ sourceModel, response });
  };

  return descriptor;
};
