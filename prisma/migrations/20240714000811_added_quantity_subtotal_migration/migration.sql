/*
  Warnings:

  - Added the required column `quantity` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotal` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProducts" ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "subtotal" INTEGER NOT NULL;
