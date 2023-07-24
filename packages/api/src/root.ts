import { authRouter } from "./router/auth";
import { checkoutRouter } from "./router/checkout";
import { checkoutAddressRouter } from "./router/checkoutAddress";
import { checkoutProductRouter } from "./router/checkoutProduct";
import { postRouter } from "./router/post";
import { productRouter } from "./router/product";
import { productCategoryRouter } from "./router/productCategory";
import { productTagRouter } from "./router/productTag";
import { shopRouter } from "./router/shop";
import { shopAddressRouter } from "./router/shopAddress";
import { userAddressRouter } from "./router/userAddress";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  checkout: checkoutRouter,
  checkoutProduct: checkoutProductRouter,
  checkoutAddress: checkoutAddressRouter,
  post: postRouter,
  product: productRouter,
  productCategory: productCategoryRouter,
  productTag: productTagRouter,
  shop: shopRouter,
  shopAddress: shopAddressRouter,
  userAddress: userAddressRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
