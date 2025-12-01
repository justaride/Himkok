# Himkok Dashboard - Finance Module Setup Guide

## ✅ What's Been Built

### 1. Database Schema (`prisma/schema.prisma`)
- **FinancialPeriod**: Complete P&L, balance sheet, cash flow, segments, KPIs
- **Conflict**: Track and resolve data inconsistencies
- **Projection**: Scenario planning with adjustable assumptions
- **PitchDeck**: PDF management with versioning
- **MeetingNote**: Transcripts with AI summaries and action items
- **ResearchEntry**: Verified vs. unverified data tracking

### 2. Data Extraction (`lib/data/financial-extractor.ts`)
- Pre-extracted 2023 financial data:
  - Revenue: NOK 47.995M
  - EBITDA: NOK 2.8M (5.8% margin)
  - Net Profit: NOK 2.961M (6.2% margin)
  - Full segment breakdown
  - All KPIs calculated
- Historical trends 2019-2023
- Automatic KPI calculation functions

### 3. API Routes (`app/api/financial/route.ts`)
- GET /api/financial - List/filter periods
- POST /api/financial - Create new periods with auto-calculated KPIs

### 4. Financial Dashboard UI (`app/finance/page.tsx`)
- Key metrics cards (Revenue, EBITDA, Net Profit, Employees)
- Year-over-year growth indicators
- Segment revenue breakdown with visual bars
- Data verification status
- Conflict warnings
- Prepared for charts integration

### 5. Navigation
- Added "Finance" link to header (desktop + mobile)

---

## 🚀 Next Steps to Complete Setup

### Step 1: Install Dependencies
```bash
npm install @prisma/client@latest prisma@latest tsx@latest --legacy-peer-deps
```
*(The --legacy-peer-deps flag handles React 19 compatibility)*

### Step 2: Set Up Database

You need a PostgreSQL database. Choose one:

**Option A: Local PostgreSQL**
```bash
# Install PostgreSQL (if not already)
brew install postgresql@16
brew services start postgresql@16

# Create database
createdb himkok_dev
```

**Option B: Supabase (Recommended)**
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings → Database

**Option C: Railway/Render/Neon**
Similar cloud database services

### Step 3: Configure Environment Variables
Create `.env` file:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/himkok_dev"
```

For Supabase, it looks like:
```bash
DATABASE_URL="postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres"
```

### Step 4: Initialize Database
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations to create tables
npx prisma migrate dev --name init

# Seed with 2019-2023 financial data
npx prisma db seed
```

### Step 5: Start Dev Server
```bash
npm run dev
```

Navigate to: **http://localhost:3001/finance**

---

## 📊 What You'll See

- Complete financial dashboard with 2023 data
- Historical comparison (2019-2023)
- Segment breakdown:
  - Bar Operations: 70%
  - RTD Products: 15%
  - Distillery: 10%
  - Consulting: 5%
- All KPIs calculated
- Data source tracking

---

## 🔄 Data Flow

```
MIRO FOLDER Executive Summary
         ↓
financial-extractor.ts (parsing)
         ↓
prisman/seed.ts (import)
         ↓
PostgreSQL Database
         ↓
API Routes
         ↓
Finance Dashboard UI
```

---

## 🎯 Future Enhancements (Phase 2)

1. **Charts Integration**
   - Install Recharts: `npm install recharts`
   - Add revenue trend line chart
   - Add segment pie chart
   - Add KPI sparklines

2. **Projections Tool**
   - Interactive sliders for assumptions
   - Scenario comparison view
   - Sensitivity analysis

3. **Conflict Resolution UI**
   - Side-by-side comparison
   - Manual resolution workflow
   - Audit trail

4. **Data Import**
   - CSV upload for new periods
   - Automatic conflict detection
   - Bulk import from remaining MIRO files

---

## ⚠️ Current Limitations

- Historical data (2019-2022) uses estimates based on 2023 ratios
  - Mark these as unverified in database
  - Real data should be extracted from actual financial statements
- Charts are placeholder (need Recharts integration)
- No authentication yet (all data publicly accessible)

---

## 🐛 Troubleshooting

**"Cannot find module @prisma/client"**
```bash
npx prisma generate
```

**Migration fails**
```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Or push schema without migration
npx prisma db push
```

**Module resolution errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Peer dependency warnings**
- Use `--legacy-peer-deps` flag
- React 19 is very new, some packages may show warnings but will work

---

## 📝 Database Commands Reference

```bash
# View database in browser
npx prisma studio

# Create a migration
npx prisma migrate dev --name <migration_name>

# Reset database
npx prisma migrate reset

# Push schema changes without migration
npx prisma db push

# Generate TypeScript types
npx prisma generate
```

---

## ✨ What's Ready to Use

Once database is set up:
- **Full 2023 financial data** from MIRO Executive Summary
- **5-year historical view** (2019-2023)
- **Segment analysis**
- **KPI dashboard**
- **API ready** for custom queries
- **Conflict tracking** system in place
