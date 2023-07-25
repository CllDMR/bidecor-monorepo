import { addressRouter } from "./router/address";
import { authRouter } from "./router/auth";
import { customerRouter } from "./router/customer";
import { customerCheckoutRouter } from "./router/customer-checkout";
import { customerPaymentRouter } from "./router/customer-payment";
import { productRouter } from "./router/product";
import { supplierRouter } from "./router/supplier";
import { supplierCheckoutRouter } from "./router/supplier-checkout";
import { supplierPaymentRouter } from "./router/supplier-payment";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  address: addressRouter,
  auth: authRouter,
  customerCheckout: customerCheckoutRouter,
  customerPayment: customerPaymentRouter,
  customer: customerRouter,
  product: productRouter,
  supplierCheckout: supplierCheckoutRouter,
  supplierPayment: supplierPaymentRouter,
  supplier: supplierRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
