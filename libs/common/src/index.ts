export enum Environments {
  LOCAL = 'local',
  DEVELOPMENT = 'dev',
  PRODUCTION = 'production',
}

export const systemConfig: IApiSystemConfig = {
  environment: `${process.env.ENVIRONMENT}`,
};

export interface IApiSystemConfig {
  environment: string;
}

export const constants = {
  appName: 'Todo app'
}
