import { Injectable } from "@nestjs/common";
import { FetchNetflixContentRequest } from "../externalContentIntegration/FetchNetflixContentRequest";
import { FetchNetflixContentResponse } from "../externalContentIntegration/FetchNetflixContentResponse";
import { FetchPrimeVideoContentRequest } from "../externalContentIntegration/FetchPrimeVideoContentRequest";
import { FetchPrimeVideoContentResponse } from "../externalContentIntegration/FetchPrimeVideoContentResponse";

@Injectable()
export class ExternalContentIntegrationService {
  constructor() {}
  async FetchNetflixContent(args: FetchNetflixContentRequest): Promise<FetchNetflixContentResponse[]> {
    throw new Error("Not implemented");
  }
  async FetchPrimeVideoContent(args: FetchPrimeVideoContentRequest): Promise<FetchPrimeVideoContentResponse[]> {
    throw new Error("Not implemented");
  }
}
