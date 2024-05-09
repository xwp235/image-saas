import { pgTable, bigint, varchar } from 'drizzle-orm/pg-core'

export const User = pgTable('user', {
  id: bigint('id', { mode: 'bigint' }).primaryKey(),
  username: varchar('username', { length: 16 }).notNull()
})
