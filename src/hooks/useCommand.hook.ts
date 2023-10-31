import { Command } from 'commands';
import { useLocalObservable } from 'mobx-react';

export const useCommand = <T extends Command>(command: () => T) => {
    const store = useLocalObservable(() => command());
    return store;
};
