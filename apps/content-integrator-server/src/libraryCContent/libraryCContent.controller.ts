import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibraryCContentService } from "./libraryCContent.service";
import { LibraryCContentControllerBase } from "./base/libraryCContent.controller.base";

@swagger.ApiTags("libraryCContents")
@common.Controller("libraryCContents")
export class LibraryCContentController extends LibraryCContentControllerBase {
  constructor(protected readonly service: LibraryCContentService) {
    super(service);
  }
}
