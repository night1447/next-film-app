import $api from '@/http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '@/models/AuthResponse';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', { user: { email, password } });
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', { user: { email, password } });
    }

    static async logout(): Promise<void> {
        return $api.post('/logout');
    }
}