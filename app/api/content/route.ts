import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// Hard Coded Data
const posts = [
    {
      title: 'Lorem Ipsum',
      slug: 'lorem-ipsum2',
      content:'Lorem ipsum dolor sit',
    },
    {
      title: 'Ajay Mandal',
      slug: 'mandal',
      content:'Hello from API',
    },
    {
      title: '2nd',
      slug: '01',
      content:'Hello from API',
    },
];

export async function GET() {

  const session = await getServerSession();
  return NextResponse.json(posts);
}
