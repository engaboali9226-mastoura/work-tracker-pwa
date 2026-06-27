import {
  repositoryContainer,
} from "./repositories/repository.container";

import {
  applicationContainer,
} from "./application/application.container";

export class CompositionRoot {

  public readonly repositories =
    repositoryContainer;

  public readonly application =
    applicationContainer;

}

export const compositionRoot =
  new CompositionRoot();
