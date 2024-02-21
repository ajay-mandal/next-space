"use client";
import Link from 'next/link';
import Image from 'next/image';
import { SignInButton } from './Button';


export default function NavMenu() {
    return (
        <nav className='flex text-white justify-between bg-teal-400 h-20 p-5'>
            <Link href={'/'} className='flex item-center '>
                <Image
                src="/next.svg"
                width={220}
                height={30}
                alt="NextSpace Logo"
                />
            </Link>
            <ul className='flex space-x-4 list-none'>
                <li className='px-2 py-1'>
                    <Link href={"/about"} className='text-white hover:text-black'>About</Link>
                </li>
                <li className='px-2 py-1'>
                    <Link href={"/blog"} className='text-white hover:text-black'>Blog</Link>
                </li>
                <li className='px-2 py-1'>
                    <Link href={"/users"} className='text-white hover:text-black'>Users</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
            </ul>
        </nav>
    )
}
