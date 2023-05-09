import login from '@/api/login';
import { refreshToken } from '@/api/refresh';
import { logout } from '@/api/logout';
import { getProfile } from '@/api/getProfile';


const api = {
    auth: {
        refreshToken,
        logout,
        getProfile,
        login,
    },
};
export default api;