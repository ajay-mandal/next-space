import Link  from "next/link";

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    image: string | null;
}

export default function UserCard({id, name, age, image}: Props) {
    return (
        <div>
            <img
            src= {image ?? '/github.png'}
            alt={`${name}'s profile`}
            className="w-36 h-36 px-2 py-2 border-solid border-2 border-neutral"
            />
            <div className="grid grid-rows-2 px-3">
                <h3>
                    <Link href={`/users/${id}`}>{name}</Link>
                </h3>
                <p>Age: {age}</p>
            </div>
        </div>
    )
}
