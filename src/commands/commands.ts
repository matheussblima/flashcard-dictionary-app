export interface Command<Params = any> {
    execute(params?: Params): Promise<void>;
    canExecute(params?: Params): boolean;
  }
  
  export const CommandInvoker = <Params = any>(
    command: Command<Params>,
    params?: Params,
  ) => {
    return () => {
      if (command.canExecute(params)) {
        command.execute(params);
      }
    };
  };
  