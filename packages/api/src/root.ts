import { addressRouter } from "./router/address";
import { authRouter } from "./router/auth";
import { customerRouter } from "./router/customer";
import { customerCheckoutRouter } from "./router/customer-checkout";
import { productRouter } from "./router/product";
import { supplierRouter } from "./router/supplier";
import { supplierCheckoutRouter } from "./router/supplier-checkout";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  product: productRouter,
  customerCheckout: customerCheckoutRouter,
  supplierCheckout: supplierCheckoutRouter,
  customer: customerRouter,
  address: addressRouter,
  supplier: supplierRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
