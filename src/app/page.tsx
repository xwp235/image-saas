import { Input } from '@/components/Input'
import { Textarea } from '@/components/Textarea'
import { Button } from '@/components/Button'
import { db } from '@/server/db/db'
import { User } from '@/server/db/schema'
import { eq } from 'drizzle-orm'

export default async function Home() {
  // const users = await db.query.User.findMany()
  const users = await db.select().from(User).where(eq(User.username, 'Jack'))
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App Name" />
        <Textarea name="description" placeholder="Description" />
        <Button type="submit">Submit</Button>
      </form>

      {users.map(user => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  )
}
