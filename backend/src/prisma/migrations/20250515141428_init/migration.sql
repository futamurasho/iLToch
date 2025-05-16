/*
  Warnings:

  - Added the required column `content` to the `emails` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_emails" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "gmailMessageId" TEXT NOT NULL,
    "subject" TEXT,
    "from" TEXT,
    "content" TEXT NOT NULL,
    "snippet" TEXT,
    "receivedAt" DATETIME,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "isNotified" BOOLEAN NOT NULL DEFAULT false,
    "customLabel" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "emails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_emails" ("createdAt", "customLabel", "from", "gmailMessageId", "id", "isNotified", "isRead", "receivedAt", "snippet", "subject", "userId") SELECT "createdAt", "customLabel", "from", "gmailMessageId", "id", "isNotified", "isRead", "receivedAt", "snippet", "subject", "userId" FROM "emails";
DROP TABLE "emails";
ALTER TABLE "new_emails" RENAME TO "emails";
CREATE UNIQUE INDEX "emails_gmailMessageId_key" ON "emails"("gmailMessageId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
