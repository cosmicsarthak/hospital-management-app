import prismadb from "@/lib/prismadb";

export const getPatientsCount = async (storeId: string) => {
  const patientsCount = await prismadb.order.count({
    where: {
      storeId,
      isPaid: true,
    },
  });

  return patientsCount;
};
