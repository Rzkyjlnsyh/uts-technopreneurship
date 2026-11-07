import { type ClassValue, clsx } from "clsx";

/** classNames helper — sederhana, tanpa dependency tambahan. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
