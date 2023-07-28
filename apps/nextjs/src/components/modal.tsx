"use client";

import type { FC, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <button
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          onClick={() => router.back()}
        >
          ✕
        </button>
        {children}
      </div>
      <div className="modal-backdrop">
        <button onClick={() => router.back()}>close</button>
      </div>
    </dialog>
  );
};
