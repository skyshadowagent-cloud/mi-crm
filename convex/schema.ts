import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Modelo de datos de Design/README.md («Modelo de datos implícito»).
// Los ids de Convex sustituyen a los `id: string` del prototipo.

export const roleId = v.union(v.literal("duena"), v.literal("ventas"), v.literal("admin"));

export const stage = v.union(
  v.literal("nuevo"),
  v.literal("contactado"),
  v.literal("propuesta"),
  v.literal("negociacion"),
  v.literal("ganado"),
  v.literal("perdido"),
);

export default defineSchema({
  users: defineTable({
    full: v.string(),
    email: v.string(),
    roleId,
  }).index("by_email", ["email"]),

  clients: defineTable({
    name: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    email: v.optional(v.string()),
    origin: v.union(v.literal("web"), v.literal("whatsapp"), v.literal("email")),
    stage,
    note: v.optional(v.string()),
  })
    .index("by_email", ["email"])
    .index("by_stage", ["stage"]),

  interactions: defineTable({
    clientId: v.id("clients"),
    channel: v.union(
      v.literal("llamada"),
      v.literal("email"),
      v.literal("whatsapp"),
      v.literal("persona"),
      v.literal("nota"),
    ),
    text: v.string(),
    authorId: v.id("users"),
    at: v.string(), // ISO
  }).index("by_client", ["clientId", "at"]),

  opportunities: defineTable({
    clientId: v.id("clients"),
    concept: v.string(),
    amount: v.number(), // EUR
    status: v.union(v.literal("abierta"), v.literal("ganada"), v.literal("perdida")),
    managerId: v.id("users"),
    at: v.string(), // ISO
  }).index("by_client", ["clientId", "at"]),

  followUps: defineTable({
    clientId: v.id("clients"),
    title: v.string(),
    date: v.string(), // YYYY-MM-DD, Europe/Madrid
    time: v.optional(v.string()), // HH:mm
    ownerId: v.id("users"),
    createdBy: v.id("users"),
    done: v.boolean(),
  })
    .index("by_client", ["clientId", "date"])
    .index("by_owner_and_date", ["ownerId", "done", "date"])
    .index("by_date", ["done", "date"]),
});
