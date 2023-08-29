// types.ts

export type ChatGPTPlugin = {
    id: string;
    name: string;
    enabled: boolean;
  };
  
  export type Profile = {
    name: string;
    plugins: ChatGPTPlugin[];
  };
  