import { IUser } from '@/models/User';

export interface IRegistration {
    user: IUser;
    isAuth: boolean;
}