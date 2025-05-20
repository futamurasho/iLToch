/*
  Warnings:

  - You are about to drop the column `sender` on the `friends` table. All the data in the column will be lost.
  - Added the required column `emailAddress` to the `friends` table without a default value. This is not possible if the table is not empty.

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
    CONSTRAINT "emails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_emails" ("content", "createdAt", "customLabel", "gmailMessageId", "id", "isNotified", "isRead", "receivedAt", "receiverAddress", "senderAddress", "snippet", "subject", "userId") SELECT "content", "createdAt", "customLabel", "gmailMessageId", "id", "isNotified", "isRead", "receivedAt", "receiverAddress", "senderAddress", "snippet", "subject", "userId" FROM "emails";
DROP TABLE "emails";
ALTER TABLE "new_emails" RENAME TO "emails";
CREATE UNIQUE INDEX "emails_gmailMessageId_key" ON "emails"("gmailMessageId");
CREATE TABLE "new_friends" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customLabel" TEXT,
    CONSTRAINT "friends_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_friends" ("createdAt", "customLabel", "id", "name", "userId") SELECT "createdAt", "customLabel", "id", "name", "userId" FROM "friends";
DROP TABLE "friends";
ALTER TABLE "new_friends" RENAME TO "friends";
CREATE UNIQUE INDEX "friends_userId_emailAddress_key" ON "friends"("userId", "emailAddress");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
