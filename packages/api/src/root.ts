import { authRouter } from "./router/auth";
import { customerCheckoutRouter } from "./router/customer-checkout";
import { productRouter } from "./router/product";
import { supplierCheckoutRouter } from "./router/supplier-checkout";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  product: productRouter,
  customerCheckout: customerCheckoutRouter,
  supplierCheckout: supplierCheckoutRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
