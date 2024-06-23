import * as graphql from "@nestjs/graphql";
import { LibraryBContentResolverBase } from "./base/libraryBContent.resolver.base";
import { LibraryBContent } from "./base/LibraryBContent";
import { LibraryBContentService } from "./libraryBContent.service";

@graphql.Resolver(() => LibraryBContent)
export class LibraryBContentResolver extends LibraryBContentResolverBase {
  constructor(protected readonly service: LibraryBContentService) {
    super(service);
  }
}
