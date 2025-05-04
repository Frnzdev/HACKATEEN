-- CreateTable
CREATE TABLE "Necessidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "Necessidade_pkey" PRIMARY KEY ("id")
);
