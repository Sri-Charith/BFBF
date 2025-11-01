import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis;

// Determine if we should use Accelerate
// Use PRISMA_ACCELERATE_URL if provided, otherwise check if DATABASE_URL starts with prisma://
const shouldUseAccelerate = 
  process.env.PRISMA_ACCELERATE_URL || 
  (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith('prisma://'));

// Base Prisma client configuration
const prismaOptions = {
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn', 'query'] : ['error', 'warn'],
};

// Create Prisma client
let prismaClient = globalForPrisma.prisma || new PrismaClient(prismaOptions);

// Apply Accelerate extension if configured
if (shouldUseAccelerate) {
  const accelerateUrl = process.env.PRISMA_ACCELERATE_URL || process.env.DATABASE_URL;
  prismaClient = prismaClient.$extends(
    withAccelerate({
      url: accelerateUrl,
    })
  );
  console.log('✅ Prisma Accelerate enabled');
} else {
  console.log('ℹ️  Using direct database connection (Prisma Accelerate not configured)');
}

export const prisma = prismaClient;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Graceful shutdown
if (typeof process !== 'undefined') {
  process.on('beforeExit', async () => {
    await prisma.$disconnect();
  });
}

export default prisma;
