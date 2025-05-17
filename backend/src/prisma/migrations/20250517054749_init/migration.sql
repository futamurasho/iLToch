/*
  Warnings:

  - A unique constraint covering the columns `[userId,sender]` on the table `friends` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "friends_sender_key";

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_emails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "gmailMessageId" TEXT NOT NULL,
    "subject" TEXT,
    "sender" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "snippet" TEXT,
    "receivedAt" DATETIME,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "isNotified" BOOLEAN NOT NULL DEFAULT false,
    "customLabel" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "emails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "emails_userId_sender_fkey" FOREIGN KEY ("userId", "sender") REFERENCES "friends" ("userId", "sender") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_emails" ("content", "createdAt", "customLabel", "gmailMessageId", "id", "isNotified", "isRead", "receivedAt", "sender", "snippet", "subject", "userId") SELECT "content", "createdAt", "customLabel", "gmailMessageId", "id", "isNotified", "isRead", "receivedAt", "sender", "snippet", "subject", "userId" FROM "emails";
DROP TABLE "emails";
ALTER TABLE "new_emails" RENAME TO "emails";
CREATE UNIQUE INDEX "emails_gmailMessageId_key" ON "emails"("gmailMessageId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "friends_userId_sender_key" ON "friends"("userId", "sender");
