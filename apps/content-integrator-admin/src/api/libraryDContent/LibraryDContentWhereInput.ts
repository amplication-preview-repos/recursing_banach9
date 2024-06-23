import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LibraryDContentWhereInput = {
  genre?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  movie?: StringNullableFilter;
  series?: StringNullableFilter;
};
