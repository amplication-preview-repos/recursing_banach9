import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LibraryCContentWhereInput = {
  genre?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  movie?: StringNullableFilter;
  series?: StringNullableFilter;
};
