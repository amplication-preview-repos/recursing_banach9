import { LibraryDContent as TLibraryDContent } from "../api/libraryDContent/LibraryDContent";

export const LIBRARYDCONTENT_TITLE_FIELD = "genre";

export const LibraryDContentTitle = (record: TLibraryDContent): string => {
  return record.genre?.toString() || String(record.id);
};
