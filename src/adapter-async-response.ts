import { transforModels } from './transfor-models';

export const adapterAsyncResponse = (targetModel: any) => (_target: any, _propertyName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const sourceModel = await originalMethod.apply(this, args);

    return transforModels(sourceModel, targetModel);
  };

  return descriptor;
};
