import { IApiSystemConfig, systemConfig } from '@vodafone/common';

export const config = {
  corsAllow: new RegExp(process.env.CORS_ALLOW),
  system: systemConfig,
} as IApiConfig;

export interface IApiConfig {
  corsAllow: RegExp;
  system: IApiSystemConfig;
};
