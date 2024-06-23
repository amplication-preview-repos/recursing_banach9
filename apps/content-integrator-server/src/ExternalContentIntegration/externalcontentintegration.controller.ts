import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ExternalContentIntegrationService } from "./externalcontentintegration.service";
import { FetchPrimeVideoContentRequest } from "../externalContentIntegration/FetchPrimeVideoContentRequest";
import { FetchNetflixContentResponse } from "../externalContentIntegration/FetchNetflixContentResponse";
import { FetchPrimeVideoContentResponse } from "../externalContentIntegration/FetchPrimeVideoContentResponse";

@swagger.ApiTags("externalContentIntegrations")
@common.Controller("externalContentIntegrations")
export class ExternalContentIntegrationController {
  constructor(protected readonly service: ExternalContentIntegrationService) {}

  @common.Post("/netflix-content")
  @swagger.ApiOkResponse({
    type: FetchNetflixContentResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchNetflixContent(
    @common.Body()
    body: FetchPrimeVideoContentRequest
  ): Promise<FetchNetflixContentResponse[]> {
        return this.service.FetchNetflixContent(body);
      }

  @common.Post("/prime-video-content")
  @swagger.ApiOkResponse({
    type: FetchPrimeVideoContentResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchPrimeVideoContent(
    @common.Body()
    body: FetchPrimeVideoContentRequest
  ): Promise<FetchPrimeVideoContentResponse[]> {
        return this.service.FetchPrimeVideoContent(body);
      }
}
