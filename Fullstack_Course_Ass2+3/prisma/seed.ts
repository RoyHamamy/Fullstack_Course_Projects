import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
let id = 1;
let ider = 2750016;

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Roy Hamamy",
    email: "royha@post.bgu.ac.il",
    posts: {},
  },
  {
    name: "Nilu",
    email: "nilu@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
  {
    name: "Mahmoud",
    email: "mahmoud@prisma.io",
    posts: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",
          content: "https://www.github.com/prisma/prisma/discussions",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  // REMOVE THE COMMENT TO CREATE FAKE POSTS :
  //createFakePosts();

  
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function createFakePosts() {
  for (let i = 0; i < 30; i++) {
    await prisma.post.create({
      data: {
          title: `Fake Post number: ${i}`,
          content: "Fake Fake Fake...",
          video: null,
          published: true,
          authorId: i%2==0? 44 : 45,
      }
    })
  }
}
