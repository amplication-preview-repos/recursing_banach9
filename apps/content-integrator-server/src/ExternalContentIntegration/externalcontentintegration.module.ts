import { Module } from "@nestjs/common";
import { ExternalContentIntegrationService } from "./externalcontentintegration.service";
import { ExternalContentIntegrationController } from "./externalcontentintegration.controller";
import { ExternalContentIntegrationResolver } from "./externalcontentintegration.resolver";

@Module({
  controllers: [ExternalContentIntegrationController],
  providers: [ExternalContentIntegrationService, ExternalContentIntegrationResolver],
  exports: [ExternalContentIntegrationService],
})
export class ExternalContentIntegrationModule {}
