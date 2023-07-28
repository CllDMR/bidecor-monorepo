import type { FC } from "react";
import Link from "next/link";

import { CSRF_experimental } from "@acme/auth";

import { SignInWithDiscordButton } from "~/components/auth";

const HomePage: FC = () => {
  return (
    <div
      className="hero h-[calc(100vh-80px)]"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <form
              className="form-control"
              action={`/api/auth/signin/email`}
              method="post"
            >
              <label className="label" htmlFor="hero-email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="hero-email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
              <label className="label" htmlFor="hero-email">
                <Link href="#" className="link-hover link label-text-alt">
                  Forgot password?
                </Link>
              </label>
              {/* <input
                className="sr-only hidden"
                name="callbackUrl"
                value="/dashboard"
                readOnly
              /> */}
              <button className="btn btn-primary" type="submit">
                Sign in
              </button>
              <CSRF_experimental />
            </form>
            <div className="mt-3">
              <div>
                <span>Or</span>
              </div>
              <div className="mt-3">
                <SignInWithDiscordButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
