import { Module } from "@nestjs/common";
import { LibraryAContentModuleBase } from "./base/libraryAContent.module.base";
import { LibraryAContentService } from "./libraryAContent.service";
import { LibraryAContentController } from "./libraryAContent.controller";
import { LibraryAContentResolver } from "./libraryAContent.resolver";

@Module({
  imports: [LibraryAContentModuleBase],
  controllers: [LibraryAContentController],
  providers: [LibraryAContentService, LibraryAContentResolver],
  exports: [LibraryAContentService],
})
export class LibraryAContentModule {}
