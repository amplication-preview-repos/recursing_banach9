import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibraryDContentService } from "./libraryDContent.service";
import { LibraryDContentControllerBase } from "./base/libraryDContent.controller.base";

@swagger.ApiTags("libraryDContents")
@common.Controller("libraryDContents")
export class LibraryDContentController extends LibraryDContentControllerBase {
  constructor(protected readonly service: LibraryDContentService) {
    super(service);
  }
}
