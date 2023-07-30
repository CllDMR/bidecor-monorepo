"use client";

import type { FC } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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

export const EditCustomerCheckoutForm: FC<{
  id: string;
  customerId: string;
}> = ({ id, customerId }) => {
  const [customerCheckout] = api.customerCheckout.byId.useSuspenseQuery(id);

  const context = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: { ...customerCheckout },
  });

  const {
    mutate: updateCustomerCheckout,
    error,
    isLoading,
  } = api.customerCheckout.update.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.customerCheckout.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    updateCustomerCheckout({
      ...data,
      id,
      customerId,
    });
  };

  if (!customerCheckout) notFound();

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

export const CreateCustomerCheckoutForm: FC<{
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
    mutate: createCustomerCheckout,
    error,
    isLoading,
  } = api.customerCheckout.create.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.customerCheckout.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    createCustomerCheckout({ ...data, customerId });
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

export function CustomerCheckoutList() {
  const [customerCheckouts] = api.customerCheckout.all.useSuspenseQuery();

  return (
    <>
      {customerCheckouts.length === 0 ? (
        <span>There are no customerCheckouts!</span>
      ) : (
        <div className="grid w-full grid-cols-4 gap-3 px-4">
          {customerCheckouts.map((p) => {
            return <CustomerCheckoutCard key={p.id} customerCheckout={p} />;
          })}
        </div>
      )}
    </>
  );
}

function CustomerCheckoutCard(props: {
  customerCheckout: RouterOutputs["customerCheckout"]["all"][number];
}) {
  const context = api.useContext();
  const deleteCustomerCheckout = api.customerCheckout.delete.useMutation();

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="card-body">
        <Link
          className="card-title"
          href={`customer-checkouts/${props.customerCheckout.id}`}
        >
          <h2>{props.customerCheckout.id}</h2>
        </Link>

        <p className="">
          Created At: {new Date(props.customerCheckout.createdAt).toISOString()}
        </p>
        <div className="card-actions justify-end pt-4">
          <Link
            className="btn btn-primary btn-sm text-xs"
            href={`customer-checkouts/${props.customerCheckout.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="btn btn-primary btn-sm text-xs"
            onClick={async () => {
              await deleteCustomerCheckout.mutateAsync(
                props.customerCheckout.id,
              );
              await context.customerCheckout.all.invalidate();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
