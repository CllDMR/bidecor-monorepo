import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const customerPaymentRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.customerPayment.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.customerPayment.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        customerId: z.string().nonempty(),
        amount: z.string().nonempty(),
        commission: z.string().nonempty(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.customerPayment.create({
        data: input,
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty(),
        customerId: z.string().nonempty().optional(),
        grandDiscount: z.number().positive().optional(),
        grandPrice: z.number().positive().optional(),
        grandTotalPrice: z.number().positive().optional(),
      }),
    )
    .mutation(({ ctx, input: { id, ...restInput } }) => {
      return ctx.prisma.customerPayment.update({
        where: {
          id: id,
        },
        data: restInput,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.customerPayment.delete({ where: { id: input } });
  }),
});
