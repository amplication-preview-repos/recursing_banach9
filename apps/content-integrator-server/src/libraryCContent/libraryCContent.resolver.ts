import * as graphql from "@nestjs/graphql";
import { LibraryCContentResolverBase } from "./base/libraryCContent.resolver.base";
import { LibraryCContent } from "./base/LibraryCContent";
import { LibraryCContentService } from "./libraryCContent.service";

@graphql.Resolver(() => LibraryCContent)
export class LibraryCContentResolver extends LibraryCContentResolverBase {
  constructor(protected readonly service: LibraryCContentService) {
    super(service);
  }
}
