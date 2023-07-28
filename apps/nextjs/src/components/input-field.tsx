import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<IFormValues extends FieldValues> {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  placeholder?: string;
  errorText?: string;
}

export const InputField = <IFormValues extends FieldValues>({
  label,
  register,
  required,
  errorText,
  placeholder,
}: Props<IFormValues>) => (
  <>
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      {...register(label, { required })}
      placeholder={placeholder ?? "Type here"}
      className="input input-bordered input-primary w-full"
    />
    {errorText && (
      <label className="label">
        <span className="label-text-alt text-red-500">{errorText}</span>
      </label>
    )}
  </>
);
