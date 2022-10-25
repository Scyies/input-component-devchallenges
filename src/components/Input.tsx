import clsx from 'clsx';
import {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  useState,
} from 'react';

export interface InputRootProps {
  children: ReactNode;
  className: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface InputComponentProps extends InputProps {
  labelText?: string;
  helperText?: string;
  startIcon?: string;
  endIcon?: string;
  padding?: 'sm' | 'md';
  fullWidth?: boolean;
  error?: boolean;
  multiline?: boolean;
  placeholderMultiline?: string;
  valueMultiline?: string;
  onChangeMultiline?: Dispatch<React.SetStateAction<string>>;
  rows?: number;
  hover?: boolean;
  focus?: boolean;
}

function InputRoot({ children, className }: InputRootProps) {
  return <div className={className}>{children}</div>;
}

function InputInput({ ...rest }: InputProps) {
  return (
    <input
      className='bg-transparent rounded-lg text-sm placeholder:text-sm flex-1 outline-none'
      {...rest}
    />
  );
}

export function Input({
  labelText = 'Label',
  helperText,
  startIcon,
  endIcon,
  padding = 'md',
  fullWidth = false,
  error = false,
  multiline = false,
  placeholderMultiline = 'Placeholder',
  rows = 4,
  valueMultiline,
  onChangeMultiline,
  hover,
  focus,
  ...rest
}: InputComponentProps) {
  return (
    <div
      className={clsx('group flex flex-col gap-1 font-noto', {
        'w-full': fullWidth,
      })}
    >
      <label
        htmlFor='input'
        className={clsx(
          'text-xs text-gray-900 group-focus-within:text-blue-500',
          {
            'group-focus-within:text-red-500 group-hover:text-gray-900 text-red-500':
              error,
            'text-blue-500': focus,
          }
        )}
      >
        {labelText}
      </label>
      <InputRoot
        className={clsx(
          'flex items-center gap-3 bg-white py-4 px-3 rounded-lg ring-1 ring-gray-500 group-hover:ring-gray-900 group-focus-within:ring-blue-500',
          {
            'ring-red-500 group-focus-within:ring-red-500': error,
            'bg-gray-200': rest.disabled,
            'py-[10px] px-3': padding === 'sm',
            'ring-gray-900': hover,
            'ring-blue-500': focus,
          }
        )}
      >
        {startIcon && (
          <span className='material-symbols-outlined text-gray-500'>
            {startIcon}
          </span>
        )}
        {!multiline ? (
          <InputInput {...rest} id='input' />
        ) : (
          <textarea
            name=''
            id='input'
            cols={30}
            rows={rows}
            className='bg-transparent rounded-lg text-sm placeholder:text-sm flex-1 outline-none resize-none'
            placeholder={placeholderMultiline}
            value={valueMultiline}
            onChange={(e) => onChangeMultiline!(e.target.value)}
          ></textarea>
        )}
        {endIcon && (
          <span className='material-symbols-outlined text-gray-500'>
            {endIcon}
          </span>
        )}
      </InputRoot>
      {helperText && (
        <span
          className={clsx('text-[10px]', {
            'text-red-500 group-hover:text-gray-500': error,
            'text-gray-500': error === false,
          })}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
