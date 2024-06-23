import { LibraryBContent as TLibraryBContent } from "../api/libraryBContent/LibraryBContent";

export const LIBRARYBCONTENT_TITLE_FIELD = "genre";

export const LibraryBContentTitle = (record: TLibraryBContent): string => {
  return record.genre?.toString() || String(record.id);
};
