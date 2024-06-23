import { LibraryAContent as TLibraryAContent } from "../api/libraryAContent/LibraryAContent";

export const LIBRARYACONTENT_TITLE_FIELD = "genre";

export const LibraryAContentTitle = (record: TLibraryAContent): string => {
  return record.genre?.toString() || String(record.id);
};
