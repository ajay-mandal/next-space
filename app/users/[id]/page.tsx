import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FollowButton from "@/components/FollowButton/FollowButton";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
    params: {
        id: string
    };
}

// Not visible on user-interface but can be viewed in page source
export async function generateMetadata({params}:Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    })
    return { title: `User profile of ${user?.name}`}
}

export default async function UserProfile({ params }:Props) {

    const session = await getServerSession(authOptions);

    if(!session) {
      redirect('/api/auth/signin');
    }
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    });

    const { name, bio, image } = user ?? {};

    return (
        <div className="flex flex-col content-center justify-center items-center mt-16 mx-auto max-w-xl">
            <h1 className="text-2xl font-bold py-2">{name}</h1>
            <img src={image ?? '/github.png'} alt={`${name}'s profile`} className="w-48 h-1/2"/>
            <h3 className="text-xl font-semibold py-2">Bio</h3>
            <p>{bio}</p>
            <div className="py-4">
                <FollowButton targetUserId={params.id} />
            </div>
        </div>
    )
}
