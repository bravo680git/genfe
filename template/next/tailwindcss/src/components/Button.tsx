import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return <button className="rounded-md border border-slate-200 px-4 py-1">{children}</button>;
}

export default Button;
