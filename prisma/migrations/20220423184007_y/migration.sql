/*
  Warnings:

  - Added the required column `domain_name` to the `Domains` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Domains" ADD COLUMN     "domain_name" TEXT NOT NULL;
