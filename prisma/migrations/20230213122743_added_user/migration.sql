-- CreateTable
CREATE TABLE "TestTable" (
    "Id" INTEGER NOT NULL,
    "name" VARCHAR(20),
    "birthDay" DATE,

    CONSTRAINT "TestTable_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "User" (
    "Id" INTEGER NOT NULL,
    "FirstName" VARCHAR(20),
    "LastName" VARCHAR(20) NOT NULL,
    "FathersName" VARCHAR(20) NOT NULL,
    "birthDay" DATE,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Id_key" ON "User"("Id");
