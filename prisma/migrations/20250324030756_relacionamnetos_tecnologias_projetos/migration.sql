-- CreateTable
CREATE TABLE "_ProjetoToTecnologia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjetoToTecnologia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjetoToTecnologia_B_index" ON "_ProjetoToTecnologia"("B");

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoToTecnologia" ADD CONSTRAINT "_ProjetoToTecnologia_B_fkey" FOREIGN KEY ("B") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
