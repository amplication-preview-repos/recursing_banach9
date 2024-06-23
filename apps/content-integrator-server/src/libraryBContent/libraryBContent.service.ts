import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryBContentServiceBase } from "./base/libraryBContent.service.base";

@Injectable()
export class LibraryBContentService extends LibraryBContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
