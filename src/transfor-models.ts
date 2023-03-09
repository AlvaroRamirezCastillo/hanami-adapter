export const transforModels = (sourceModel: any, targetModel: any) => {
  if (Array.isArray(sourceModel)) {
    return sourceModel.map(data => new targetModel(data));
  }

  return new targetModel(sourceModel);
}
