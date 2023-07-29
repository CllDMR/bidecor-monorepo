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
  commission: string;
}

export const EditCustomerPaymentForm: FC<{
  id: string;
  customerId: string;
}> = ({ id, customerId }) => {
  const [customerPayment] = api.customerPayment.byId.useSuspenseQuery(id);

  const context = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: { ...customerPayment },
  });

  const {
    mutate: updateCustomerPayment,
    error,
    isLoading,
  } = api.customerPayment.update.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.customerPayment.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    updateCustomerPayment({
      ...data,
      id,
      customerId,
    });
  };

  if (!customerPayment)
    return <div className="">CustomerPayment not found with {id} !</div>;

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
      <InputField
        label="commission"
        register={register}
        required
        errorText={
          errors.commission?.message ??
          error?.data?.zodError?.fieldErrors.commission?.[0]
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

export const CreateCustomerPaymentForm: FC<{
  customerId: string;
}> = ({ customerId }) => {
  const context = api.useContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const {
    mutate: createCustomerPayment,
    error,
    isLoading,
  } = api.customerPayment.create.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.customerPayment.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    createCustomerPayment({ ...data, customerId });
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
      <InputField
        label="commission"
        register={register}
        required
        errorText={
          errors.commission?.message ??
          error?.data?.zodError?.fieldErrors.commission?.[0]
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

export function CustomerPaymentList() {
  const [customerPayments] = api.customerPayment.all.useSuspenseQuery();

  return (
    <>
      {customerPayments.length === 0 ? (
        <span>There are no customerPayments!</span>
      ) : (
        <div className="grid w-full grid-cols-4 gap-3 px-4">
          {customerPayments.map((p) => {
            return <CustomerPaymentCard key={p.id} customerPayment={p} />;
          })}
        </div>
      )}
    </>
  );
}

function CustomerPaymentCard(props: {
  customerPayment: RouterOutputs["customerPayment"]["all"][number];
}) {
  const context = api.useContext();
  const deleteCustomerPayment = api.customerPayment.delete.useMutation();

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <Link
          className="card-title"
          href={`customerPayments/${props.customerPayment.id}`}
        >
          <h2>{props.customerPayment.id}</h2>
        </Link>

        <p className="">
          Created At: {new Date(props.customerPayment.createdAt).toISOString()}
        </p>
        <div className="card-actions justify-end pt-4">
          <Link
            className="btn btn-primary btn-sm text-xs"
            href={`customerPayments/${props.customerPayment.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="btn btn-primary btn-sm text-xs"
            onClick={async () => {
              await deleteCustomerPayment.mutateAsync(props.customerPayment.id);
              await context.customerPayment.all.invalidate();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
