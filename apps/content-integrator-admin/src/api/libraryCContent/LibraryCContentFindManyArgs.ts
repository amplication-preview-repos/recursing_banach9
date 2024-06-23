import { LibraryCContentWhereInput } from "./LibraryCContentWhereInput";
import { LibraryCContentOrderByInput } from "./LibraryCContentOrderByInput";

export type LibraryCContentFindManyArgs = {
  where?: LibraryCContentWhereInput;
  orderBy?: Array<LibraryCContentOrderByInput>;
  skip?: number;
  take?: number;
};
