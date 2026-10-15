import { clsx, type ClassValue } from "clsx";
export function cn(...i: ClassValue[]) { return clsx(i); }
export function waUrl(phone: string, msg: string) {
  return "https://wa.me/" + phone.replace(/[^0-9]/g,"") + "?text=" + encodeURIComponent(msg);
}
