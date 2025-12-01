-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'employee',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialPeriod" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "quarter" INTEGER,
    "month" INTEGER,
    "revenue" DECIMAL(15,2) NOT NULL,
    "cogs" DECIMAL(15,2) NOT NULL,
    "grossProfit" DECIMAL(15,2) NOT NULL,
    "laborCosts" DECIMAL(15,2) NOT NULL,
    "operatingCosts" DECIMAL(15,2) NOT NULL,
    "depreciation" DECIMAL(15,2) NOT NULL,
    "ebitda" DECIMAL(15,2) NOT NULL,
    "ebit" DECIMAL(15,2) NOT NULL,
    "financialIncome" DECIMAL(15,2) NOT NULL,
    "financialCosts" DECIMAL(15,2) NOT NULL,
    "pretaxProfit" DECIMAL(15,2) NOT NULL,
    "taxes" DECIMAL(15,2) NOT NULL,
    "netProfit" DECIMAL(15,2) NOT NULL,
    "totalAssets" DECIMAL(15,2) NOT NULL,
    "currentAssets" DECIMAL(15,2) NOT NULL,
    "fixedAssets" DECIMAL(15,2) NOT NULL,
    "financialAssets" DECIMAL(15,2) NOT NULL,
    "totalLiabilities" DECIMAL(15,2) NOT NULL,
    "currentLiabilities" DECIMAL(15,2) NOT NULL,
    "longTermDebt" DECIMAL(15,2) NOT NULL,
    "equity" DECIMAL(15,2) NOT NULL,
    "cashAndBank" DECIMAL(15,2) NOT NULL,
    "operatingCashFlow" DECIMAL(15,2) NOT NULL,
    "investingCashFlow" DECIMAL(15,2),
    "financingCashFlow" DECIMAL(15,2),
    "barRevenue" DECIMAL(15,2) NOT NULL,
    "distilleryRevenue" DECIMAL(15,2) NOT NULL,
    "rtdRevenue" DECIMAL(15,2) NOT NULL,
    "consultingRevenue" DECIMAL(15,2) NOT NULL,
    "otherRevenue" DECIMAL(15,2) NOT NULL,
    "employees" INTEGER,
    "inventoryValue" DECIMAL(15,2),
    "accountsReceivable" DECIMAL(15,2),
    "accountsPayable" DECIMAL(15,2),
    "grossMargin" DECIMAL(5,2) NOT NULL,
    "ebitdaMargin" DECIMAL(5,2) NOT NULL,
    "netMargin" DECIMAL(5,2) NOT NULL,
    "debtToEquity" DECIMAL(10,2),
    "currentRatio" DECIMAL(10,2),
    "quickRatio" DECIMAL(10,2),
    "dataSource" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedBy" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinancialPeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conflict" (
    "id" TEXT NOT NULL,
    "field" TEXT NOT NULL,
    "value1" DECIMAL(15,2) NOT NULL,
    "source1" TEXT NOT NULL,
    "value2" DECIMAL(15,2) NOT NULL,
    "source2" TEXT NOT NULL,
    "difference" DECIMAL(15,2) NOT NULL,
    "percentDiff" DECIMAL(5,2),
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "resolution" TEXT,
    "chosenValue" DECIMAL(15,2),
    "chosenSource" TEXT,
    "resolvedById" TEXT,
    "resolvedAt" TIMESTAMP(3),
    "periodId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conflict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "scenario" TEXT NOT NULL,
    "description" TEXT,
    "revenue" DECIMAL(15,2) NOT NULL,
    "ebitda" DECIMAL(15,2) NOT NULL,
    "netProfit" DECIMAL(15,2) NOT NULL,
    "barRevenue" DECIMAL(15,2),
    "distilleryRevenue" DECIMAL(15,2),
    "rtdRevenue" DECIMAL(15,2),
    "consultingRevenue" DECIMAL(15,2),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectionAssumption" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "value" DECIMAL(10,4) NOT NULL,
    "unit" TEXT NOT NULL,
    "description" TEXT,
    "projectionId" TEXT NOT NULL,

    CONSTRAINT "ProjectionAssumption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PitchDeck" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "audience" TEXT NOT NULL,
    "valueChainPosition" TEXT,
    "focus" TEXT[],
    "pageCount" INTEGER,
    "thumbnailPath" TEXT,
    "date" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'active',
    "description" TEXT,
    "keyHighlights" TEXT[],
    "tags" TEXT[],
    "parentDeckId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PitchDeck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingNote" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "attendees" TEXT[],
    "location" TEXT,
    "transcript" TEXT NOT NULL,
    "summary" TEXT,
    "keyPoints" TEXT[],
    "decisions" TEXT[],
    "topics" TEXT[],
    "tags" TEXT[],
    "sourceFile" TEXT,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionItem" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "assignedTo" TEXT,
    "dueDate" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'open',
    "completedAt" TIMESTAMP(3),
    "meetingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActionItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchEntry" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "content" TEXT,
    "source" TEXT NOT NULL,
    "sourceFile" TEXT,
    "verificationStatus" TEXT NOT NULL DEFAULT 'unverified',
    "verifiedBy" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "category" TEXT NOT NULL,
    "topics" TEXT[],
    "tags" TEXT[],
    "datePublished" TIMESTAMP(3),
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResearchEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResearchDataPoint" (
    "id" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "unit" TEXT,
    "year" INTEGER,
    "researchEntryId" TEXT NOT NULL,

    CONSTRAINT "ResearchDataPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MeetingNoteToPitchDeck" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_MeetingNoteToPitchDeck_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_MeetingNoteToResearchEntry" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_MeetingNoteToResearchEntry_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "FinancialPeriod_year_idx" ON "FinancialPeriod"("year");

-- CreateIndex
CREATE INDEX "FinancialPeriod_verified_idx" ON "FinancialPeriod"("verified");

-- CreateIndex
CREATE UNIQUE INDEX "FinancialPeriod_year_quarter_month_key" ON "FinancialPeriod"("year", "quarter", "month");

-- CreateIndex
CREATE INDEX "Conflict_resolved_idx" ON "Conflict"("resolved");

-- CreateIndex
CREATE INDEX "Conflict_periodId_idx" ON "Conflict"("periodId");

-- CreateIndex
CREATE INDEX "Projection_year_idx" ON "Projection"("year");

-- CreateIndex
CREATE INDEX "Projection_scenario_idx" ON "Projection"("scenario");

-- CreateIndex
CREATE INDEX "ProjectionAssumption_projectionId_idx" ON "ProjectionAssumption"("projectionId");

-- CreateIndex
CREATE INDEX "PitchDeck_audience_idx" ON "PitchDeck"("audience");

-- CreateIndex
CREATE INDEX "PitchDeck_status_idx" ON "PitchDeck"("status");

-- CreateIndex
CREATE INDEX "PitchDeck_date_idx" ON "PitchDeck"("date");

-- CreateIndex
CREATE INDEX "MeetingNote_date_idx" ON "MeetingNote"("date");

-- CreateIndex
CREATE INDEX "MeetingNote_createdById_idx" ON "MeetingNote"("createdById");

-- CreateIndex
CREATE INDEX "ActionItem_status_idx" ON "ActionItem"("status");

-- CreateIndex
CREATE INDEX "ActionItem_dueDate_idx" ON "ActionItem"("dueDate");

-- CreateIndex
CREATE INDEX "ResearchEntry_verificationStatus_idx" ON "ResearchEntry"("verificationStatus");

-- CreateIndex
CREATE INDEX "ResearchEntry_category_idx" ON "ResearchEntry"("category");

-- CreateIndex
CREATE INDEX "ResearchEntry_dateAdded_idx" ON "ResearchEntry"("dateAdded");

-- CreateIndex
CREATE INDEX "ResearchDataPoint_researchEntryId_idx" ON "ResearchDataPoint"("researchEntryId");

-- CreateIndex
CREATE INDEX "ResearchDataPoint_metric_idx" ON "ResearchDataPoint"("metric");

-- CreateIndex
CREATE INDEX "_MeetingNoteToPitchDeck_B_index" ON "_MeetingNoteToPitchDeck"("B");

-- CreateIndex
CREATE INDEX "_MeetingNoteToResearchEntry_B_index" ON "_MeetingNoteToResearchEntry"("B");

-- AddForeignKey
ALTER TABLE "Conflict" ADD CONSTRAINT "Conflict_resolvedById_fkey" FOREIGN KEY ("resolvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conflict" ADD CONSTRAINT "Conflict_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "FinancialPeriod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projection" ADD CONSTRAINT "Projection_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectionAssumption" ADD CONSTRAINT "ProjectionAssumption_projectionId_fkey" FOREIGN KEY ("projectionId") REFERENCES "Projection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PitchDeck" ADD CONSTRAINT "PitchDeck_parentDeckId_fkey" FOREIGN KEY ("parentDeckId") REFERENCES "PitchDeck"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingNote" ADD CONSTRAINT "MeetingNote_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionItem" ADD CONSTRAINT "ActionItem_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "MeetingNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchEntry" ADD CONSTRAINT "ResearchEntry_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResearchDataPoint" ADD CONSTRAINT "ResearchDataPoint_researchEntryId_fkey" FOREIGN KEY ("researchEntryId") REFERENCES "ResearchEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeetingNoteToPitchDeck" ADD CONSTRAINT "_MeetingNoteToPitchDeck_A_fkey" FOREIGN KEY ("A") REFERENCES "MeetingNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeetingNoteToPitchDeck" ADD CONSTRAINT "_MeetingNoteToPitchDeck_B_fkey" FOREIGN KEY ("B") REFERENCES "PitchDeck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeetingNoteToResearchEntry" ADD CONSTRAINT "_MeetingNoteToResearchEntry_A_fkey" FOREIGN KEY ("A") REFERENCES "MeetingNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeetingNoteToResearchEntry" ADD CONSTRAINT "_MeetingNoteToResearchEntry_B_fkey" FOREIGN KEY ("B") REFERENCES "ResearchEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
