import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibraryAContentService } from "./libraryAContent.service";
import { LibraryAContentControllerBase } from "./base/libraryAContent.controller.base";

@swagger.ApiTags("libraryAContents")
@common.Controller("libraryAContents")
export class LibraryAContentController extends LibraryAContentControllerBase {
  constructor(protected readonly service: LibraryAContentService) {
    super(service);
  }
}
