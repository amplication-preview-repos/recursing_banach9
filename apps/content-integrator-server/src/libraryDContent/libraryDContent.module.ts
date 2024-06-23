import { Module } from "@nestjs/common";
import { LibraryDContentModuleBase } from "./base/libraryDContent.module.base";
import { LibraryDContentService } from "./libraryDContent.service";
import { LibraryDContentController } from "./libraryDContent.controller";
import { LibraryDContentResolver } from "./libraryDContent.resolver";

@Module({
  imports: [LibraryDContentModuleBase],
  controllers: [LibraryDContentController],
  providers: [LibraryDContentService, LibraryDContentResolver],
  exports: [LibraryDContentService],
})
export class LibraryDContentModule {}
