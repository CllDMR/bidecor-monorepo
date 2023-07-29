"use client";

import type { FC } from "react";
import Link from "next/link";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";
import { InputField } from "./input-field";

interface IFormValues {
  amount: string;
}

export const EditSupplierPaymentForm: FC<{
  id: string;
  supplierId: string;
}> = ({ id, supplierId }) => {
  const [supplierPayment] = api.supplierPayment.byId.useSuspenseQuery(id);

  const context = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: { ...supplierPayment },
  });

  const {
    mutate: updateSupplierPayment,
    error,
    isLoading,
  } = api.supplierPayment.update.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.supplierPayment.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    updateSupplierPayment({
      ...data,
      id,
      supplierId,
    });
  };

  if (!supplierPayment)
    return <div className="">SupplierPayment not found with {id} !</div>;

  return (
    <form
      className="form-control w-full max-w-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="amount"
        register={register}
        required
        errorText={
          errors.amount?.message ??
          error?.data?.zodError?.fieldErrors.amount?.[0]
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

export const CreateSupplierPaymentForm: FC<{
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
    mutate: createSupplierPayment,
    error,
    isLoading,
  } = api.supplierPayment.create.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.supplierPayment.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    createSupplierPayment({ ...data, supplierId });
  };

  return (
    <form
      className="form-control w-full max-w-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="amount"
        register={register}
        required
        errorText={
          errors.amount?.message ??
          error?.data?.zodError?.fieldErrors.amount?.[0]
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

export function SupplierPaymentList() {
  const [supplierPayments] = api.supplierPayment.all.useSuspenseQuery();

  return (
    <>
      {supplierPayments.length === 0 ? (
        <span>There are no supplierPayments!</span>
      ) : (
        <div className="grid w-full grid-cols-4 gap-3 px-4">
          {supplierPayments.map((p) => {
            return <SupplierPaymentCard key={p.id} supplierPayment={p} />;
          })}
        </div>
      )}
    </>
  );
}

function SupplierPaymentCard(props: {
  supplierPayment: RouterOutputs["supplierPayment"]["all"][number];
}) {
  const context = api.useContext();
  const deleteSupplierPayment = api.supplierPayment.delete.useMutation();

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <Link
          className="card-title"
          href={`supplier-payments/${props.supplierPayment.id}`}
        >
          <h2>{props.supplierPayment.id}</h2>
        </Link>

        <p className="">
          Created At: {new Date(props.supplierPayment.createdAt).toISOString()}
        </p>
        <div className="card-actions justify-end pt-4">
          <Link
            className="btn btn-primary btn-sm text-xs"
            href={`supplier-payments/${props.supplierPayment.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="btn btn-primary btn-sm text-xs"
            onClick={async () => {
              await deleteSupplierPayment.mutateAsync(props.supplierPayment.id);
              await context.supplierPayment.all.invalidate();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
