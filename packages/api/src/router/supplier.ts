import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const supplierRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.supplier.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.supplier.findFirst({ where: { id: input } });
  }),
  create: publicProcedure.input(z.object({})).mutation(({ ctx, input }) => {
    return ctx.prisma.supplier.create({
      data: input,
    });
  }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty(),
      }),
    )
    .mutation(({ ctx, input: { id, ...restInput } }) => {
      return ctx.prisma.supplier.update({
        where: {
          id: id,
        },
        data: restInput,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.supplier.delete({ where: { id: input } });
  }),
});
