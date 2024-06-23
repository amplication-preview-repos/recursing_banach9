import { LibraryAContentWhereInput } from "./LibraryAContentWhereInput";
import { LibraryAContentOrderByInput } from "./LibraryAContentOrderByInput";

export type LibraryAContentFindManyArgs = {
  where?: LibraryAContentWhereInput;
  orderBy?: Array<LibraryAContentOrderByInput>;
  skip?: number;
  take?: number;
};
