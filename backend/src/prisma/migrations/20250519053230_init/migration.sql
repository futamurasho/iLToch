/*
  Warnings:

  - You are about to drop the column `emailAdress` on the `friends` table. All the data in the column will be lost.
  - Added the required column `emailAddress` to the `friends` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
