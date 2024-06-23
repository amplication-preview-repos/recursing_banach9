import { Module } from "@nestjs/common";
import { LibraryBContentModuleBase } from "./base/libraryBContent.module.base";
import { LibraryBContentService } from "./libraryBContent.service";
import { LibraryBContentController } from "./libraryBContent.controller";
import { LibraryBContentResolver } from "./libraryBContent.resolver";

@Module({
  imports: [LibraryBContentModuleBase],
  controllers: [LibraryBContentController],
  providers: [LibraryBContentService, LibraryBContentResolver],
  exports: [LibraryBContentService],
})
export class LibraryBContentModule {}
