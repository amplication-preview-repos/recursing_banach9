import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LibraryBContentWhereInput = {
  genre?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  movie?: StringNullableFilter;
  series?: StringNullableFilter;
};
