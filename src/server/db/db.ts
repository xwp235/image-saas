import { drizzle } from 'drizzle-orm/postgres-js'
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres'

import * as schema from './schema'

// for migrations
// const migrationClient = postgres("postgres://postgres:123456@127.0.0.1:5432/image_saas", { max: 14 });
// migrate(drizzle(migrationClient), ...)
// for query purposes
const queryClient = postgres('postgres://postgres:123456@127.0.0.1:5432/image_saas')
export const db = drizzle(queryClient, { schema })
