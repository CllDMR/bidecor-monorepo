"use client";

import type { FC } from "react";
import Link from "next/link";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";

interface IFormValues {}

export const EditSupplierForm: FC<{
  id: string;
}> = ({ id }) => {
  const [supplier] = api.supplier.byId.useSuspenseQuery(id);

  const context = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: { ...supplier },
  });

  const {
    mutate: updateSupplier,
    error,
    isLoading,
  } = api.supplier.update.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.supplier.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    updateSupplier({
      ...data,
      id,
    });
  };

  if (!supplier) return <div className="">Supplier not found with {id} !</div>;

  return (
    <form
      className="form-control w-full max-w-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <InputField
        label="amount"
        register={register}
        required
        errorText={
          errors.amount?.message ??
          error?.data?.zodError?.fieldErrors.amount?.[0]
        }
      /> */}

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

export const CreateSupplierForm: FC<{
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
    mutate: createSupplier,
    error,
    isLoading,
  } = api.supplier.create.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.supplier.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    createSupplier({ ...data, supplierId });
  };

  return (
    <form
      className="form-control w-full max-w-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <InputField
        label="amount"
        register={register}
        required
        errorText={
          errors.amount?.message ??
          error?.data?.zodError?.fieldErrors.amount?.[0]
        }
      /> */}

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

export function SupplierList() {
  const [suppliers] = api.supplier.all.useSuspenseQuery();

  return (
    <>
      {suppliers.length === 0 ? (
        <span>There are no suppliers!</span>
      ) : (
        <div className="grid w-full grid-cols-4 gap-3 px-4">
          {suppliers.map((p) => {
            return <SupplierCard key={p.id} supplier={p} />;
          })}
        </div>
      )}
    </>
  );
}

function SupplierCard(props: {
  supplier: RouterOutputs["supplier"]["all"][number];
}) {
  const context = api.useContext();
  const deleteSupplier = api.supplier.delete.useMutation();

  return (
    <div className="card-compact card bg-base-100 shadow-xl">
      <div className="card-body">
        <Link className="card-title" href={`suppliers/${props.supplier.id}`}>
          <h2>{props.supplier.id}</h2>
        </Link>

        <p className="">
          Created At: {new Date(props.supplier.createdAt).toISOString()}
        </p>
        <div className="card-actions justify-end pt-4">
          <Link
            className="btn btn-primary btn-sm text-xs"
            href={`suppliers/${props.supplier.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="btn btn-primary btn-sm text-xs"
            onClick={async () => {
              await deleteSupplier.mutateAsync(props.supplier.id);
              await context.supplier.all.invalidate();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
