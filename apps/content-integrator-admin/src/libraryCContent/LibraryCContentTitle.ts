import { LibraryCContent as TLibraryCContent } from "../api/libraryCContent/LibraryCContent";

export const LIBRARYCCONTENT_TITLE_FIELD = "genre";

export const LibraryCContentTitle = (record: TLibraryCContent): string => {
  return record.genre?.toString() || String(record.id);
};
