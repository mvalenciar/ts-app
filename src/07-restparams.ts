import { ROLES, User } from './01-enum';

const currentUser: User = {
  userName: 'miltVR',
  role: ROLES.COSTUMER,
};

export const checkRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  } else {
    return false;
  }
};

export const checkRoleV2 = (...roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  } else {
    return false;
  }
};

const rta = checkRoleV2(ROLES.ADMIN, ROLES.COSTUMER, ROLES.SELLER);
console.log('checkRoleV2', rta);
