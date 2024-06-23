import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryAContentServiceBase } from "./base/libraryAContent.service.base";

@Injectable()
export class LibraryAContentService extends LibraryAContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
