-- CreateEnum
CREATE TYPE "Position" AS ENUM ('None', 'Junior', 'Middle', 'Senior');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "position" "Position" NOT NULL DEFAULT 'None';

-- CreateTable
CREATE TABLE "ResponseData" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "ResponseData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PositionUrl" (
    "position" "Position" NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ResponseData_id_key" ON "ResponseData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ResponseData_value_key" ON "ResponseData"("value");

-- CreateIndex
CREATE UNIQUE INDEX "PositionUrl_url_key" ON "PositionUrl"("url");
