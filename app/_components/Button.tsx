'use client';

import { Spinner } from "@/components/spinner";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';
import Link from "next/link";

export function SignInButton() {
    const {data: session, status} = useSession();
    console.log(session, status);

    if(status == 'loading') {
        return(
            <Spinner size="lg"/>
        )
    }

    if (status == 'authenticated') {
        return (
            <div className="flex grid-cols-2 px-4 py-">
                <Link href={'/.'}>
                    <Image
                    src = {session.user?.image ?? '/github-default.svg'}
                    width={40}
                    height={40}
                    alt="Your Name"
                    />
                </Link>
                <button onClick={()=> signOut()} className="px-2">Sign Out</button>
            </div>
        );
    }
    return <button onClick={() => signIn()} className="px-2 py-1">Sign In</button>
}
