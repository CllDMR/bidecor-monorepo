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

export const EditProductForm: FC<{ id: string }> = ({ id }) => {
  const [product] = api.product.byId.useSuspenseQuery(id);

  const context = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: { ...product },
  });

  const {
    mutate: updateProduct,
    error,
    isLoading,
  } = api.product.update.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.product.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    updateProduct({
      ...data,
      id,
    });
  };

  if (!product) return <div className="">Product not found with {id} !</div>;

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

export function CreateProductForm() {
  const context = api.useContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const {
    mutate: createProduct,
    error,
    isLoading,
  } = api.product.create.useMutation({
    async onSuccess(data) {
      reset(data);
      await context.product.all.invalidate();
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    createProduct(data);
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

export function ProductList() {
  const [products] = api.product.all.useSuspenseQuery();

  return (
    <>
      {products.length === 0 ? (
        <span>There are no products!</span>
      ) : (
        <div className="grid w-full grid-cols-4 gap-3 px-4">
          {products.map((p) => {
            return <ProductCard key={p.id} product={p} />;
          })}
        </div>
      )}
    </>
  );
}

function ProductCard(props: {
  product: RouterOutputs["product"]["all"][number];
}) {
  const context = api.useContext();
  const deleteProduct = api.product.delete.useMutation();

  return (
    <div className="card-compact card bg-base-100 shadow-xl">
      <div className="card-body">
        <Link className="card-title" href={`products/${props.product.id}`}>
          <h2>{props.product.name}</h2>
        </Link>

        <p className="">
          Created At: {new Date(props.product.createdAt).toISOString()}
        </p>
        <div className="card-actions justify-end pt-4">
          <Link
            className="btn btn-primary btn-sm text-xs"
            href={`products/${props.product.id}/edit`}
          >
            Edit
          </Link>
          <button
            className="btn btn-primary btn-sm text-xs"
            onClick={async () => {
              await deleteProduct.mutateAsync(props.product.id);
              await context.product.all.invalidate();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
