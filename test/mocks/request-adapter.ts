import { ModelUi } from './model-ui';

interface RequestDto {
  nombre: string;
}

export class RequestAdapter implements RequestDto {
  nombre = '';

  constructor(modelUi: ModelUi) {
    this.nombre = modelUi.name;
  }
}
