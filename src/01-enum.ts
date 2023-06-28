export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  COSTUMER = 'costumer',
}

export type User = {
  userName: string;
  role: ROLES;
};

const miltuser: User = {
  userName: 'milt023',
  role: ROLES.ADMIN,
};
