import { LibraryBContentWhereInput } from "./LibraryBContentWhereInput";
import { LibraryBContentOrderByInput } from "./LibraryBContentOrderByInput";

export type LibraryBContentFindManyArgs = {
  where?: LibraryBContentWhereInput;
  orderBy?: Array<LibraryBContentOrderByInput>;
  skip?: number;
  take?: number;
};
