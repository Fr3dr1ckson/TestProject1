/*
  Warnings:

  - You are about to drop the `Id` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Id";

-- CreateTable
CREATE TABLE "User" (
    "Id" INTEGER NOT NULL,
    "FirstName" TEXT,
    "LastName" TEXT NOT NULL,
    "FathersName" TEXT NOT NULL,
    "birthDay" DATE,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Id_key" ON "User"("Id");
