import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibraryBContentService } from "./libraryBContent.service";
import { LibraryBContentControllerBase } from "./base/libraryBContent.controller.base";

@swagger.ApiTags("libraryBContents")
@common.Controller("libraryBContents")
export class LibraryBContentController extends LibraryBContentControllerBase {
  constructor(protected readonly service: LibraryBContentService) {
    super(service);
  }
}
