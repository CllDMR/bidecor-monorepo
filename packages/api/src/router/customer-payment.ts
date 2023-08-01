import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const customerPaymentRouter = createTRPCRouter({
  all: publicProcedure
    .input(z.object({ customerId: z.string().nonempty().optional() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.customerPayment.findMany({
        where: { customerId: input.customerId },
        orderBy: { id: "desc" },
      });
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
        amount: z.string().nonempty().optional(),
        commission: z.string().nonempty().optional(),
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
