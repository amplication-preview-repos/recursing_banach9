import * as graphql from "@nestjs/graphql";
import { FetchNetflixContentRequest } from "../externalContentIntegration/FetchNetflixContentRequest";
import { FetchNetflixContentResponse } from "../externalContentIntegration/FetchNetflixContentResponse";
import { FetchPrimeVideoContentRequest } from "../externalContentIntegration/FetchPrimeVideoContentRequest";
import { FetchPrimeVideoContentResponse } from "../externalContentIntegration/FetchPrimeVideoContentResponse";
import { ExternalContentIntegrationService } from "./externalcontentintegration.service";

export class ExternalContentIntegrationResolver {
  constructor(protected readonly service: ExternalContentIntegrationService) {}

  @graphql.Mutation(() => [FetchNetflixContentResponse])
  async FetchNetflixContent(
    @graphql.Args()
    args: FetchNetflixContentRequest
  ): Promise<FetchNetflixContentResponse[]> {
    return this.service.FetchNetflixContent(args);
  }

  @graphql.Mutation(() => [FetchPrimeVideoContentResponse])
  async FetchPrimeVideoContent(
    @graphql.Args()
    args: FetchPrimeVideoContentRequest
  ): Promise<FetchPrimeVideoContentResponse[]> {
    return this.service.FetchPrimeVideoContent(args);
  }
}
