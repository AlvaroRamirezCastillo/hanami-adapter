export class Transformer {
  private transformModel(sourceModel: any, targetModel: any) {
    if (Array.isArray(sourceModel)) {
      return sourceModel.map(data => new targetModel(data));
    }

    return new targetModel(sourceModel);
  }

  transformRequest({ args, request }: { args: any, request: any }) {
    if (request) {
      return this.transformModel(args, request);
    }

    return args;
  }

  transformResponse({ sourceModel, response }: { sourceModel: any, response: any }) {
    if (response) {
      return this.transformModel(sourceModel, response);
    }

    return sourceModel;
  };
}
