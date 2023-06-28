import { BaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer',
}

export interface user extends BaseModel {
  username: string;
  rol: ROLES;
}
