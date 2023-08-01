import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const supplierCheckoutRouter = createTRPCRouter({
  all: publicProcedure
    .input(z.object({ supplierId: z.string().nonempty().optional() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supplierCheckout.findMany({
        where: { supplierId: input.supplierId },
        orderBy: { id: "desc" },
      });
    }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.supplierCheckout.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        supplierId: z.string().nonempty(),
        grandDiscount: z.number().positive(),
        grandPrice: z.number().positive(),
        grandTotalPrice: z.number().positive(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supplierCheckout.create({
        data: input,
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty(),
        supplierId: z.string().nonempty().optional(),
        grandDiscount: z.number().positive().optional(),
        grandPrice: z.number().positive().optional(),
        grandTotalPrice: z.number().positive().optional(),
      }),
    )
    .mutation(({ ctx, input: { id, ...restInput } }) => {
      return ctx.prisma.supplierCheckout.update({
        where: {
          id: id,
        },
        data: restInput,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.supplierCheckout.delete({ where: { id: input } });
  }),
});
