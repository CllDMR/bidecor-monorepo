import { CSRF_experimental } from "@acme/auth";

export function SignInWithEmailButton() {
  return (
    <form action="/api/auth/signin/email" method="post">
      <button className="btn btn-primary w-full">Sign in with Email</button>
      <CSRF_experimental />
    </form>
  );
}

export function SignOutButton() {
  return (
    <form action="/api/auth/signout" method="post">
      <button className="btn btn-primary btn-outline w-full ">Sign out</button>
      <CSRF_experimental />
    </form>
  );
}
