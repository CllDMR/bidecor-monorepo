import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const customerCheckoutRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.customerCheckout.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.customerCheckout.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        customerId: z.string().nonempty(),
        grandDiscount: z.number().positive(),
        grandPrice: z.number().positive(),
        grandTotalPrice: z.number().positive(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.customerCheckout.create({
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
      return ctx.prisma.customerCheckout.update({
        where: {
          id: id,
        },
        data: restInput,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.customerCheckout.delete({ where: { id: input } });
  }),
});
