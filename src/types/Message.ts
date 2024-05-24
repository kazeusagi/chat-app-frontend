import { RoleEnum } from '../enum';

// export type Message = {
//   text: string;
//   role: RoleEnum;
//   user?: string;
// };

export type Message = {
  id: number;
  content: string;
  chatId: number;
  roleId: number;
};
