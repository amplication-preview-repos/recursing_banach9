import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LibraryBContentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="genre" source="genre" />
        <TextInput label="language" source="language" />
        <TextInput label="movie" source="movie" />
        <TextInput label="series" source="series" />
      </SimpleForm>
    </Edit>
  );
};
