import { Environments } from "@vodafone/common";
import { config } from "../../config";

class ExceptionService {

  handle(error: any) {
    console.error(error);
    if(config.system.environment === Environments.PRODUCTION) {
      // Report to Exception SaaS (beyond scope of this test)
    }
  }

}

export const exceptionService = new ExceptionService();
