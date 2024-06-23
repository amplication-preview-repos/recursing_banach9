import * as graphql from "@nestjs/graphql";
import { LibraryDContentResolverBase } from "./base/libraryDContent.resolver.base";
import { LibraryDContent } from "./base/LibraryDContent";
import { LibraryDContentService } from "./libraryDContent.service";

@graphql.Resolver(() => LibraryDContent)
export class LibraryDContentResolver extends LibraryDContentResolverBase {
  constructor(protected readonly service: LibraryDContentService) {
    super(service);
  }
}
