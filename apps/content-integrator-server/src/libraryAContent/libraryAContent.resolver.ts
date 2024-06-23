import * as graphql from "@nestjs/graphql";
import { LibraryAContentResolverBase } from "./base/libraryAContent.resolver.base";
import { LibraryAContent } from "./base/LibraryAContent";
import { LibraryAContentService } from "./libraryAContent.service";

@graphql.Resolver(() => LibraryAContent)
export class LibraryAContentResolver extends LibraryAContentResolverBase {
  constructor(protected readonly service: LibraryAContentService) {
    super(service);
  }
}
