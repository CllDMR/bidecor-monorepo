import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const supplierPaymentRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.supplierPayment.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.supplierPayment.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        supplierId: z.string().nonempty(),
        amount: z.string().nonempty(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supplierPayment.create({
        data: input,
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty(),
        supplierId: z.string().nonempty().optional(),
        amount: z.string().nonempty().optional(),
      }),
    )
    .mutation(({ ctx, input: { id, ...restInput } }) => {
      return ctx.prisma.supplierPayment.update({
        where: {
          id: id,
        },
        data: restInput,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.supplierPayment.delete({ where: { id: input } });
  }),
});
