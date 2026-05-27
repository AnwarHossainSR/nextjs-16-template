'use client';

import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

import { Input as TextInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  register,
  required,
  errors,
  placeholder,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="
            text-neutral-700
            absolute
            top-5
            left-2
          "
        />
      )}
      <TextInput
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        type={type}
        className={cn(
          'peer h-auto bg-white p-4 pt-6 font-light text-neutral-800',
          formatPrice ? 'pl-9' : 'pl-4',
          errors[id] && 'border-sky-500 focus-visible:ring-sky-500'
        )}
      />
      <Label
        htmlFor={id}
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          ${formatPrice ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? 'text-sky-600' : 'text-zinc-400'}
        `}
      >
        {label}
      </Label>
    </div>
  );
};

export { Input };
