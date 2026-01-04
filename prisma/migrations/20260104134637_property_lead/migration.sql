-- CreateTable
CREATE TABLE "PropertyLead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "propertyName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PropertyLead_pkey" PRIMARY KEY ("id")
);
