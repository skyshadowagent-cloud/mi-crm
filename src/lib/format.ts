// Formato es-ES para España: euros y zona horaria Europe/Madrid.
export const LOCALE = "es-ES";
export const TIME_ZONE = "Europe/Madrid";

const eur = new Intl.NumberFormat(LOCALE, { style: "currency", currency: "EUR" });

export function formatEUR(amount: number): string {
  return eur.format(amount);
}

export function formatDate(date: Date | string, options: Intl.DateTimeFormatOptions = { dateStyle: "medium" }): string {
  return new Intl.DateTimeFormat(LOCALE, { timeZone: TIME_ZONE, ...options }).format(new Date(date));
}
