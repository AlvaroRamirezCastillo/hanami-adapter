import { transforModels } from './transfor-models';

export const adapterResponse = (targetModel: any) => (_target: any, _propertyName: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const sourceModel = originalMethod.apply(this, args);

    return transforModels(sourceModel, targetModel);
  };

  return descriptor;
};
