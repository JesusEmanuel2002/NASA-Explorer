// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_NASA_API_KEY: string;
    }
  }
  
  declare var process: {
    env: NodeJS.ProcessEnv;
  };  