import { Category } from './Category';
import { User } from './User';

export interface Product {
  id: number,
  name: string,
  icon: string,
  categoryId: number,
  user: User | undefined;
  category: Category | undefined;
}