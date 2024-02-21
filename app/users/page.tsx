import UserCard from "@/components/UserCard";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Users() {
    const session = await getServerSession(authOptions);

    if(!session) {
      redirect('/api/auth/signin');
    }
    const users = await prisma.user.findMany();

    return (
        <div>
            {users.map((user)=> {
                return <UserCard key={user.id} {...user} />
            })}
        </div>
    )
}
