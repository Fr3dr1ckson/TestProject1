/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Id" (
    "Id" INTEGER NOT NULL,
    "FirstName" TEXT,
    "LastName" TEXT NOT NULL,
    "FathersName" TEXT NOT NULL,
    "birthDay" DATE,

    CONSTRAINT "Id_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Id_Id_key" ON "Id"("Id");
