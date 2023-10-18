import { ModelUi } from './model-ui';

interface ResponseDto {
  nombre: string;
}

export class ResponseAdapter extends ModelUi {
  constructor(response: ResponseDto) {
    super();
    this.name = response.nombre;
  }
}
