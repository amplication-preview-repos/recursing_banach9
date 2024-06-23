import { SortOrder } from "../../util/SortOrder";

export type LibraryCContentOrderByInput = {
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  movie?: SortOrder;
  series?: SortOrder;
  updatedAt?: SortOrder;
};
