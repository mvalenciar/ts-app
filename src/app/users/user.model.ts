export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer',
}

export interface user {
  id: string | number;
  username: string;
  rol: ROLES;
}
