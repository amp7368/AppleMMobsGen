import { persistState } from '@datorama/akita';

export let appStorage = persistState();
export function clearAppStorage() {
    appStorage.clearStore();
    console.log('STORAGE CLEARED');
}
