export interface EnvironmentVariables {
  http: {
    host: string;
    port: number;
  };

  db: {
    postgres: {
      url: string;
      port: number;
      database: string;
    };
  };
}
