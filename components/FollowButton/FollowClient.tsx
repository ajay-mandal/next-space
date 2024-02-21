"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
    targetUserId: string;
    isFollowing: boolean;
}

export default function FollowClient({targetUserId, isFollowing}: Props) {
    const router = useRouter();
    const [isPending, startTransaction] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isMutating = isFetching || isPending;

    const follow = async() => {
        setIsFetching(true);

        const res= await fetch('/api/follow', {
            method: 'POST',
            body: JSON.stringify({ targetUserId }),
            headers: {
                'Content-Type':'application/json'
            }
        });

        setIsFetching(false);
        startTransaction(()=> {
            router.refresh();
        });
    }

    const unfollow = async ()=> {
        setIsFetching(true);

        const res = await fetch(`/api/follow?targetUserId=${targetUserId}`,{
            method:'DELETE',
        });
        setIsFetching(false)
        startTransaction(()=> router.refresh());
    }

    if(isFollowing){
        return (
            <Button onClick={unfollow} className="bg-teal-500">{!isMutating ? 'Unfollow' : '...'}</Button>
        )
    } else {
        return (
            <Button onClick={follow} className="bg-teal-500">{!isMutating ? 'Follow' : '...'}</Button>
        )
    }
}
