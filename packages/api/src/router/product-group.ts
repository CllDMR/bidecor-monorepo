import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const productGroupRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.productGroup.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.productGroup.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string().nonempty(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.productGroup.create({
        data: input,
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty(),
        name: z.string().nonempty().optional(),
      }),
    )
    .mutation(({ ctx, input: { id, ...restInput } }) => {
      return ctx.prisma.productGroup.update({
        where: {
          id: id,
        },
        data: restInput,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.productGroup.delete({ where: { id: input } });
  }),
});
