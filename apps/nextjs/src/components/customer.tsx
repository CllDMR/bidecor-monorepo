"use client";

import type { FC } from "react";
import Link from "next/link";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";
import { InputField } from "./input-field";

interface IFormValues {
  name: string;
}

export const EditCustomerForm: FC<{ id: string }> = ({ id }) => {
  const [customer] = api.customer.byId.useSuspenseQuery(id);

  const context = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: { ...customer },
  });

  const {
    mutate: updateCustomer,
    error,
    isLoading,
  } = api.customer.update.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.customer.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    updateCustomer({
      ...data,
      id,
    });
  };

  if (!customer) return <div className="">Customer not found with {id} !</div>;

  return (
    <form
      className="form-control w-full max-w-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="name"
        register={register}
        required
        errorText={
          errors.name?.message ?? error?.data?.zodError?.fieldErrors.name?.[0]
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

export function CreateCustomerForm() {
  const context = api.useContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const {
    mutate: createCustomer,
    error,
    isLoading,
  } = api.customer.create.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.customer.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    createCustomer(data);
  };

  return (
    <form
      className="form-control w-full max-w-2xl p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="name"
        register={register}
        required
        errorText={
          errors.name?.message ?? error?.data?.zodError?.fieldErrors.name?.[0]
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
}

export function CustomerList() {
  const [customers] = api.customer.all.useSuspenseQuery();

  return (
    <>
      {customers.length === 0 ? (
        <span>There are no customers!</span>
      ) : (
        <div className="grid w-full grid-cols-4 gap-3 px-4">
          {customers.map((p) => {
            return <CustomerCard key={p.id} customer={p} />;
          })}
        </div>
      )}
    </>
  );
}

function CustomerCard(props: {
  customer: RouterOutputs["customer"]["all"][number];
}) {
  const context = api.useContext();
  const deleteCustomer = api.customer.delete.useMutation();

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <Link className="card-title" href={`customers/${props.customer.id}`}>
          <h2>{props.customer.name}</h2>
        </Link>

        <p className="">
          Created At: {new Date(props.customer.createdAt).toISOString()}
        </p>
        <div className="card-actions justify-end pt-4">
          <Link
            className="btn btn-primary btn-sm text-xs"
            href={`customers/${props.customer.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="btn btn-primary btn-sm text-xs"
            onClick={async () => {
              await deleteCustomer.mutateAsync(props.customer.id);
              await context.customer.all.invalidate();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
