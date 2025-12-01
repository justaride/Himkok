# PDF Presentation System - Setup Guide

## Overview

The Himkok Dashboard includes a complete PDF presentation system for managing and viewing pitch decks. This system uses an **iframe-based viewer** for maximum compatibility with Next.js 16 and Turbopack.

---

## Features

✅ PDF library with grid view  
✅ Search and filter by audience  
✅ Metadata display (pages, size, version)  
✅ **iframe-based PDF viewer**  
✅ Native browser controls (zoom, print, download)  
✅ API-based PDF serving  
✅ Zero external PDF dependencies  

---

## System Architecture

### 1. Database (Prisma)

**Model: `PitchDeck`**
```prisma
model PitchDeck {
  id              String   @id @default(cuid())
  title           String
  description     String?
  filePath        String
  fileSize        Int
  pageCount       Int?
  audience        String[]
  version         String?
  isActive        Boolean  @default(true)
  lastUpdated     DateTime @default(now())
  tags            String[]
  focusAreas      String[]
  keyHighlights   String[]
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

### 2. File Storage

**Location:** `public/pdfs/`

PDF files are stored in the public directory but served via API route to avoid Next.js routing conflicts.

### 3. API Route

**File:** `app/api/pdfs/[filename]/route.ts`

```typescript
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  
  // Security: prevent directory traversal
  if (filename.includes('..') || filename.includes('/')) {
    return new NextResponse('Invalid filename', { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'public', 'pdfs', filename);
  const fileBuffer = await fs.readFile(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${filename}"`,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
```

### 4. PDF Viewer Component

**File:** `components/pdf/PDFViewer.tsx`

**Implementation:** iframe-based (no external libraries)

```typescript
<iframe
  src={fileUrl}  // e.g., /api/pdfs/filename.pdf
  className="w-full h-full border-0"
  title={fileName}
/>
```

**Why iframe?**
- ✅ Native browser PDFviewer
- ✅ Zero dependencies
- ✅ No SSR issues
- ✅Built-in zoom/print/download
- ✅ 100% Next.js 16 compatible

---

## Setup Instructions

### 1. Add PDF Files

```bash
# Copy PDFs to public/pdfs/
cp /path/to/your/pdfs/*.pdf public/pdfs/
```

### 2. Seed Database

```bash
# Update seed script with PDF metadata
nano prisma/seed-pitch-decks.ts

# Run seed
export DATABASE_URL="postgresql://user@localhost:5432/himkok_dev"
npx tsx prisma/seed-pitch-decks.ts
```

**Seed Script Example:**
```typescript
await prisma.pitchDeck.create({
  data: {
    title: "Himkok Pitch Deck v2",
    description: "Comprehensive business overview",
    filePath: "/api/pdfs/your-file.pdf",  // ← API route path
    fileSize: 3145728,  // bytes
    pageCount: 20,
    audience: ["investors", "partners"],
    version: "2.0",
    tags: ["business", "strategy"],
    focusAreas: ["Revenue Growth", "Market Expansion"],
    keyHighlights: ["500+ stores", "NOK 48M revenue"],
  }
});
```

### 3. Verify API Route

```bash
# Test API endpoint
curl -I "http://localhost:8888/api/pdfs/your-file.pdf"

# Should return:
# HTTP/1.1 200 OK
# Content-Type: application/pdf
```

### 4. Access Pitch Deck Library

Navigate to: `http://localhost:8888/pitch-decks`

---

## Usage

### Viewing PDFs

1. Browse pitch deck library
2. Use search/filter to find deck
3. Click "View" button
4. PDF opens in iframe viewer with native browser controls

### Browser Controls

- **Zoom**: Cmd/Ctrl + (zoom in), Cmd/Ctrl - (zoom out)
- **Print**: Cmd/Ctrl + P
- **Download**: Browser's download button or our custom button
- **Navigate**: Browser's PDF navigation (if available)

---

## Troubleshooting

### PDF Shows 404

**Cause:** Filename mismatch or file not in `public/pdfs/`

**Fix:**
```bash
# Check file exists
ls public/pdfs/your-file.pdf

# Verify database path
psql -d himkok_dev -c "SELECT title, \"filePath\" FROM \"PitchDeck\";"

# Should be: /api/pdfs/your-file.pdf
```

### PDF Doesn't Load

**Cause:** Browser doesn't support PDFs in iframe

**Fix:** Modern browsers support this. Ensure browser is up-to-date.

### Slow Loading

**Cause:** Large PDF file

**Optimization:**
```bash
# Compress PDF (requires ghostscript)
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=compressed.pdf input.pdf
```

---

## File Size Limits

**Recommended:** < 5MB per PDF  
**Maximum:** 10MB (adjust Next.js body parser if needed)

---

## Adding New Pitch Decks

### Step 1: Add PDF File
```bash
cp new-deck.pdf public/pdfs/
```

### Step 2: Create Database Entry
```typescript
// Use Prisma Studio or API
await prisma.pitchDeck.create({
  data: {
    title: "New Deck",
    filePath: "/api/pdfs/new-deck.pdf",
    // ... other fields
  }
});
```

### Step 3: Verify
```bash
# Check API
curl -I http://localhost:8888/api/pdfs/new-deck.pdf

# Check database
npx prisma studio
```

---

## API Endpoints

### List All Pitch Decks
```bash
GET /api/pitch-decks
```

**Response:**
```json
[
  {
    "id": "...",
    "title": "Himkok Pitch Deck v2",
    "filePath": "/api/pdfs/himkok-v2.pdf",
    "audience": ["investors"],
    "pageCount": 20
  }
]
```

### Filter by Audience
```bash
GET /api/pitch-decks?audience=investors
```

### Serve PDF File
```bash
GET /api/pdfs/[filename].pdf
```

---

## Security

1. **Directory Traversal Prevention**: API route blocks `..` and `/` in filenames
2. **File Type Validation**: Only serves from `public/pdfs/` directory
3. **Content-Type Header**: Explicitly set to `application/pdf`
4. **Cache Control**: Immutable caching for performance

---

## Performance

- **Caching**: PDFs cached with max-age=31536000
- **Lazy Loading**: PDFs only load when viewer opened
- **Compression**: Use compressed PDFs for faster loading

---

## Why Not react-pdf or @react-pdf-viewer?

**Attempted:**
- `react-pdf`: DOMMatrix SSR errors with Next.js 16 + Turbopack
- `@react-pdf-viewer`: Same SSR issues + version conflicts

**iframe Solution:**
- ✅ No library needed
- ✅ Zero configuration
- ✅ Native browser features
- ✅ Perfect compatibility

---

## Future Enhancements

- [ ] Add thumbnail generation
- [ ] Implement version comparison
- [ ] Add PDF annotations
- [ ] Create presentation mode
- [ ] Add analytics (views, downloads)

---

## Support

For issues or questions:
1. Check server logs: `npm run dev`
2. Verify database: `npx prisma studio`
3. Test API: `curl`commands above
4. Check browser console for errors

---

## Success Checklist

- [ ] PDF files in `public/pdfs/`
- [ ] Database entries created
- [ ] API route returns 200 OK
- [ ] Pitch deck library loads
- [ ] PDF viewer opens on click
- [ ] PDFs display actual content
- [ ] Browser controls work (zoom, print)
- [ ] Download button functions

---

**Last Updated:** 2025-11-30  
**Status:** ✅ Working (iframe-based)
