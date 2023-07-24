import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const productRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findFirst({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        imageURL: z.string().nonempty(),
        name: z.string().nonempty(),
        price: z.number().min(1),
        sku: z.string().nonempty(),
        stock: z.number().min(1),
        thumbURL: z.string().nonempty(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.create({
        data: input,
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty(),
        imageURL: z.string().nonempty().optional(),
        name: z.string().nonempty().optional(),
        price: z.number().min(1).optional(),
        sku: z.string().nonempty().optional(),
        stock: z.number().min(1).optional(),
        thumbURL: z.string().nonempty().optional(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.product.delete({ where: { id: input } });
  }),
});
