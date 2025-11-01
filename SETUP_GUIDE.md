# Backend Setup & Quick Reference Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Create a `.env` file in the `backend` directory:
```bash
# Required: Direct database connection (for migrations and direct queries)
DATABASE_URL="postgresql://user:password@host.neon.tech/database?sslmode=require"

# Optional: Prisma Accelerate (for connection pooling and caching)
PRISMA_ACCELERATE_URL="prisma://accelerate.prisma-data.net/?api_key=your_api_key"

# Optional: Environment
NODE_ENV="development"  # or "production"
PORT=4000
```

### 3. Generate Prisma Client
```bash
npm run prisma:generate
```

### 4. Run Migrations
```bash
npm run prisma:migrate
```

### 5. Start Development Server
```bash
npm run dev
```

---

## All Available Commands

### Development
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm start` | Start production server |
| `npm run prisma:studio` | Open Prisma Studio (database GUI) |

### Prisma Operations
| Command | Description |
|---------|-------------|
| `npm run prisma:generate` | Generate Prisma Client from schema |
| `npm run prisma:migrate` | Create and apply new migration (dev) |
| `npm run prisma:migrate:deploy` | Apply pending migrations (production) |
| `npm run db:push` | Push schema changes directly (dev only) |
| `npm run db:pull` | Pull schema from database |
| `npm run prisma:seed` | Run seed script (if exists) |

---

## Setting Up Prisma Accelerate

### Option 1: Get Accelerate URL from Prisma Cloud
1. Sign up/login to [Prisma Cloud](https://cloud.prisma.io)
2. Create a new project
3. Connect your Neon database
4. Enable Accelerate
5. Copy the Accelerate connection string
6. Add to `.env`:
   ```bash
   PRISMA_ACCELERATE_URL="prisma://accelerate.prisma-data.net/?api_key=..."
   ```

### Option 2: Use Accelerate URL Directly
Set `DATABASE_URL` to your Accelerate URL:
```bash
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=..."
```

The application will automatically detect and use Accelerate.

---

## Database Schema Changes

### After modifying `prisma/schema.prisma`:

1. **Create a migration:**
   ```bash
   npm run prisma:migrate
   ```
   Enter a migration name when prompted.

2. **Or push directly (dev only):**
   ```bash
   npm run db:push
   ```
   ⚠️ Warning: This doesn't create migration history.

3. **Generate Prisma Client:**
   ```bash
   npm run prisma:generate
   ```
   Always required after schema changes.

---

## Common Issues & Solutions

### Issue: "Prisma Client not generated"
**Solution:**
```bash
npm run prisma:generate
```

### Issue: "Migration failed"
**Solution:**
1. Check your `DATABASE_URL` in `.env`
2. Ensure database is accessible
3. Review migration SQL in `prisma/migrations/`

### Issue: "Prisma Accelerate not working"
**Solution:**
1. Verify `PRISMA_ACCELERATE_URL` is set correctly
2. Check Accelerate dashboard for connection status
3. Ensure your Accelerate API key is valid

### Issue: "Database connection timeout"
**Solution:**
1. Check Neon database status
2. Verify `DATABASE_URL` is correct
3. Ensure SSL is enabled (`?sslmode=require`)

---

## Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Migration history
├── src/
│   ├── config/
│   │   └── db.js              # Database connection (pg Pool)
│   ├── controllers/           # Route handlers
│   ├── services/              # Business logic
│   ├── routes/                # Express routes
│   ├── utils/
│   │   ├── prismaClient.js    # Prisma Client (with Accelerate)
│   │   └── cache.js           # In-memory cache
│   ├── middleware/            # Express middleware
│   └── server.js              # Server entry point
├── .env                       # Environment variables (not in git)
└── package.json
```

---

## API Endpoints

### Districts
- `GET /districts` - List all districts
- `GET /districts/:districtId/dashboard` - Get dashboard data

### Performance
- `GET /performance?district=...&year=...` - Get performance data

### Trends
- `GET /trend?metric=...&district=...` - Get trend data
- `GET /trend/multi?metrics=...&district=...` - Get multiple trends

### Insights
- `GET /insights?district=...&year=...` - Get insights

### State Summary
- `GET /state-summary?year=...&metric=...` - Get state summary

---

## Performance Tips

1. **Use Caching**: Dashboard queries are cached for 120 seconds
2. **Database Indexes**: Added indexes on `(district_name, fin_year)` and `(state_name, fin_year)`
3. **Prisma Accelerate**: Enables connection pooling and query caching
4. **Compression**: All responses are gzipped automatically

---

## Security Checklist

- [ ] `.env` file is in `.gitignore`
- [ ] `DATABASE_URL` contains credentials (never commit)
- [ ] `PRISMA_ACCELERATE_URL` is secure (never commit)
- [ ] Error messages don't leak sensitive info in production
- [ ] Body size limits are set (10mb)
- [ ] CORS is configured appropriately

---

## Next Steps

1. ✅ Set up Prisma Accelerate (optional but recommended)
2. ✅ Run migrations to apply schema changes
3. ✅ Test all API endpoints
4. ✅ Monitor performance with Prisma Studio
5. 📝 Consider adding unit tests
6. 📝 Consider adding API documentation (Swagger)

