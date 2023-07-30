import type { AppRouter } from "@bidecor/api";
import { createTRPCReact } from "@trpc/react-query";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@bidecor/api";
