"use client";

import type { FC } from "react";
import Link from "next/link";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";
import { InputField } from "./input-field";

interface IFormValues {
  grandPrice: number;
  grandDiscount: number;
  grandTotalPrice: number;
}

export const EditSupplierCheckoutForm: FC<{
  id: string;
  supplierId: string;
}> = ({ id, supplierId }) => {
  const [supplierCheckout] = api.supplierCheckout.byId.useSuspenseQuery(id);

  const context = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: { ...supplierCheckout },
  });

  const {
    mutate: updateSupplierCheckout,
    error,
    isLoading,
  } = api.supplierCheckout.update.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.supplierCheckout.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    updateSupplierCheckout({
      ...data,
      id,
      supplierId,
    });
  };

  if (!supplierCheckout)
    return <div className="">SupplierCheckout not found with {id} !</div>;

  return (
    <form
      className="form-control w-full max-w-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="grandDiscount"
        register={register}
        required
        errorText={
          errors.grandDiscount?.message ??
          error?.data?.zodError?.fieldErrors.grandDiscount?.[0]
        }
      />
      <InputField
        label="grandPrice"
        register={register}
        required
        errorText={
          errors.grandPrice?.message ??
          error?.data?.zodError?.fieldErrors.grandPrice?.[0]
        }
      />
      <InputField
        label="grandTotalPrice"
        register={register}
        required
        errorText={
          errors.grandTotalPrice?.message ??
          error?.data?.zodError?.fieldErrors.grandTotalPrice?.[0]
        }
      />

      <button
        type="submit"
        className="btn btn-primary mt-4 disabled:btn-disabled"
        disabled={isLoading}
      >
        Edit
      </button>
    </form>
  );
};

export const CreateSupplierCheckoutForm: FC<{
  supplierId: string;
}> = ({ supplierId }) => {
  const context = api.useContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const {
    mutate: createSupplierCheckout,
    error,
    isLoading,
  } = api.supplierCheckout.create.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.supplierCheckout.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    createSupplierCheckout({ ...data, supplierId });
  };

  return (
    <form
      className="form-control w-full max-w-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="grandDiscount"
        register={register}
        required
        errorText={
          errors.grandDiscount?.message ??
          error?.data?.zodError?.fieldErrors.grandDiscount?.[0]
        }
      />
      <InputField
        label="grandPrice"
        register={register}
        required
        errorText={
          errors.grandPrice?.message ??
          error?.data?.zodError?.fieldErrors.grandPrice?.[0]
        }
      />
      <InputField
        label="grandTotalPrice"
        register={register}
        required
        errorText={
          errors.grandTotalPrice?.message ??
          error?.data?.zodError?.fieldErrors.grandTotalPrice?.[0]
        }
      />

      <button
        type="submit"
        className="btn btn-primary mt-4 disabled:btn-disabled"
        disabled={isLoading}
      >
        Create
      </button>
    </form>
  );
};

export function SupplierCheckoutList() {
  const [supplierCheckouts] = api.supplierCheckout.all.useSuspenseQuery();

  return (
    <>
      {supplierCheckouts.length === 0 ? (
        <span>There are no supplierCheckouts!</span>
      ) : (
        <div className="grid w-full grid-cols-4 gap-3 px-4">
          {supplierCheckouts.map((p) => {
            return <SupplierCheckoutCard key={p.id} supplierCheckout={p} />;
          })}
        </div>
      )}
    </>
  );
}

function SupplierCheckoutCard(props: {
  supplierCheckout: RouterOutputs["supplierCheckout"]["all"][number];
}) {
  const context = api.useContext();
  const deleteSupplierCheckout = api.supplierCheckout.delete.useMutation();

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <Link
          className="card-title"
          href={`supplierCheckouts/${props.supplierCheckout.id}`}
        >
          <h2>{props.supplierCheckout.id}</h2>
        </Link>

        <p className="">
          Created At: {new Date(props.supplierCheckout.createdAt).toISOString()}
        </p>
        <div className="card-actions justify-end pt-4">
          <Link
            className="btn btn-primary btn-sm text-xs"
            href={`supplierCheckouts/${props.supplierCheckout.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="btn btn-primary btn-sm text-xs"
            onClick={async () => {
              await deleteSupplierCheckout.mutateAsync(
                props.supplierCheckout.id,
              );
              await context.supplierCheckout.all.invalidate();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
