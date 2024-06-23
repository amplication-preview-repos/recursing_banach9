import { Module } from "@nestjs/common";
import { LibraryCContentModuleBase } from "./base/libraryCContent.module.base";
import { LibraryCContentService } from "./libraryCContent.service";
import { LibraryCContentController } from "./libraryCContent.controller";
import { LibraryCContentResolver } from "./libraryCContent.resolver";

@Module({
  imports: [LibraryCContentModuleBase],
  controllers: [LibraryCContentController],
  providers: [LibraryCContentService, LibraryCContentResolver],
  exports: [LibraryCContentService],
})
export class LibraryCContentModule {}
