/*
  Warnings:

  - You are about to drop the column `sender` on the `emails` table. All the data in the column will be lost.
  - Added the required column `receiverAddress` to the `emails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderAddress` to the `emails` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_emails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "gmailMessageId" TEXT NOT NULL,
    "subject" TEXT,
    "senderAddress" TEXT NOT NULL,
    "receiverAddress" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "snippet" TEXT,
    "receivedAt" DATETIME,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "isNotified" BOOLEAN NOT NULL DEFAULT false,
    "customLabel" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "emails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "emails_userId_senderAddress_fkey" FOREIGN KEY ("userId", "senderAddress") REFERENCES "friends" ("userId", "sender") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_emails" ("content", "createdAt", "customLabel", "gmailMessageId", "id", "isNotified", "isRead", "receivedAt", "snippet", "subject", "userId") SELECT "content", "createdAt", "customLabel", "gmailMessageId", "id", "isNotified", "isRead", "receivedAt", "snippet", "subject", "userId" FROM "emails";
DROP TABLE "emails";
ALTER TABLE "new_emails" RENAME TO "emails";
CREATE UNIQUE INDEX "emails_gmailMessageId_key" ON "emails"("gmailMessageId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
