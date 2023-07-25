import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const addressRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.address.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.address.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string().nonempty(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.address.create({
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
      return ctx.prisma.address.update({
        where: {
          id: id,
        },
        data: restInput,
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.address.delete({ where: { id: input } });
  }),
});
