import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LibraryDContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="genre" source="genre" />
        <TextInput label="language" source="language" />
        <TextInput label="movie" source="movie" />
        <TextInput label="series" source="series" />
      </SimpleForm>
    </Create>
  );
};
