import { IUser } from '@/models/User';

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}