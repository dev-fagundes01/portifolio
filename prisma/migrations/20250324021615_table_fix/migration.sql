/*
  Warnings:

  - You are about to drop the column `description` on the `technologies` table. All the data in the column will be lost.
  - You are about to drop the column `highlight` on the `technologies` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `technologies` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `technologies` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `technologies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `technologies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `technologies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "description",
DROP COLUMN "highlight",
DROP COLUMN "image",
DROP COLUMN "name",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "destaque" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "imagem" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
