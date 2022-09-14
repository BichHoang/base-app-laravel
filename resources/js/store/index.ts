import { useAuthStore } from './modules/auth';
import { globalStore } from './modules/global';

const useStore = () => ({
    auth: useAuthStore(),
    global: globalStore(),
});

export default useStore;
