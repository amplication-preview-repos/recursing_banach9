import { LibraryDContentWhereInput } from "./LibraryDContentWhereInput";
import { LibraryDContentOrderByInput } from "./LibraryDContentOrderByInput";

export type LibraryDContentFindManyArgs = {
  where?: LibraryDContentWhereInput;
  orderBy?: Array<LibraryDContentOrderByInput>;
  skip?: number;
  take?: number;
};
