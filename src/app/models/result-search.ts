
import { User } from "./user";

export interface ResultSearch {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

