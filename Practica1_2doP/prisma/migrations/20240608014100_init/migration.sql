-- CreateTable
CREATE TABLE "Apostador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "Apostador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EncuentroDeportivo" (
    "id" SERIAL NOT NULL,
    "equipo1" TEXT NOT NULL,
    "equipo2" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',

    CONSTRAINT "EncuentroDeportivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pronostico" (
    "id" SERIAL NOT NULL,
    "resultadoPropuesto" TEXT NOT NULL,
    "valorApuesta" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',
    "apostadorId" INTEGER NOT NULL,
    "encuentroDeportivoId" INTEGER NOT NULL,

    CONSTRAINT "Pronostico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pronostico" ADD CONSTRAINT "Pronostico_apostadorId_fkey" FOREIGN KEY ("apostadorId") REFERENCES "Apostador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pronostico" ADD CONSTRAINT "Pronostico_encuentroDeportivoId_fkey" FOREIGN KEY ("encuentroDeportivoId") REFERENCES "EncuentroDeportivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
