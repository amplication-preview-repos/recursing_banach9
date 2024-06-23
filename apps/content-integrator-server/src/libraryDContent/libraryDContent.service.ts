import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryDContentServiceBase } from "./base/libraryDContent.service.base";

@Injectable()
export class LibraryDContentService extends LibraryDContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
