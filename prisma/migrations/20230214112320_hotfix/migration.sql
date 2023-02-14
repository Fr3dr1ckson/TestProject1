/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `FirstName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "Id" SET DATA TYPE TEXT,
ALTER COLUMN "FirstName" SET NOT NULL,
ALTER COLUMN "FathersName" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("Id");
