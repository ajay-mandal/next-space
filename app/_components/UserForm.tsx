'use client';

import { Button } from "@/components/ui/button";

export default function UserForm({user}: any) {

    const updateUser = async  (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent loading
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const body = {
            name: formData.get('name'),
            bio: formData.get('bio'),
            age: formData.get('age'),
            image: formData.get('image')
        };

        const res = await fetch('/api/users',{
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        await res.json();
    }

    return(
        <div className="content-center justify-center items-center mt-16 mx-auto max-w-xl">
        <h2 className="text-2xl font-sans font-semibold">Edit Your Profile</h2>
        <form onSubmit={updateUser} className="grid grid-rows-3">
          <label htmlFor="name" className="font-bold py-2">Name</label>
          <input type="text" name="name" defaultValue={user?.name ?? ''} className="border-2 border-gray-500 rounded-sm"/>
          <label htmlFor="bio" className="font-bold py-2">Bio</label>
          <textarea
            name="bio"
            defaultValue={user?.bio ?? ''}
            className="w-38 h-28 border-2 border-gray-500 rounded-sm"
          ></textarea>
          <label htmlFor="age" className="font-bold py-2">Age</label>
          <input type="text" name="age" defaultValue={user?.age ?? 0} className="border-2 border-gray-500 rounded-sm"/>
          <label htmlFor="image" className="font-bold py-2 ">Profile Image URL</label>
          <input type="text" name="image" defaultValue={user?.image ?? ''} className="border-2 border-gray-500 rounded-sm"/>
          <div className="flex justify-center py-2">
            <Button type="submit" size="sm">Save</Button>
          </div>
        </form>
      </div>
    )
}
