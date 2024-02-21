import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import UserForm from "../_components/UserForm";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if(!session){
        redirect('/api/auth/signin')
    }

    const currentUserEmail = session?.user?.email!;
    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail
        },
    });

    return (
        <div>
            <h1 className="text-2xl font-sans font-semibold text-center">Dashboard</h1>
            <UserForm user={user}/>
        </div>
    )

}
