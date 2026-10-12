export type RoleId = "duena" | "ventas" | "admin";

// Único punto de control de rol para /equipo (menú de cuenta, guarda de ruta y eliminar usuario).
// Repite la comprobación en el servidor (funciones de Convex); esto solo decide qué se muestra.
export function canManageUsers(user: { roleId: RoleId } | null | undefined): boolean {
  return user?.roleId === "duena";
}
