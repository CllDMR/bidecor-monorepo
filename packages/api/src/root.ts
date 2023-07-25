import { authRouter } from "./router/auth";
import { customerCheckoutRouter } from "./router/customer-checkout";
import { productRouter } from "./router/product";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  product: productRouter,
  customerCheckout: customerCheckoutRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
