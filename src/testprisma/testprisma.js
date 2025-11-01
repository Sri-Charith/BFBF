import { PrismaClient } from '../../prisma/src/generated/prisma'
const prisma = new PrismaClient()

async function main() {
  const data = await prisma.playing_with_neon.findMany()
  console.log(data)
}

main()
  .catch(err => console.error("❌ Database connection failed:", err))
  .finally(async () => await prisma.$disconnect())
