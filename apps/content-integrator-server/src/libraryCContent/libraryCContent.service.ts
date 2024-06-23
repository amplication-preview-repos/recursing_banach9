import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryCContentServiceBase } from "./base/libraryCContent.service.base";

@Injectable()
export class LibraryCContentService extends LibraryCContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
