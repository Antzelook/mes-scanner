-- CreateTable
CREATE TABLE "ErrorRecord" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "deveui" TEXT NOT NULL,
    "types" TEXT[],
    "actions" TEXT[],
    "comment" TEXT,

    CONSTRAINT "ErrorRecord_pkey" PRIMARY KEY ("id")
);
