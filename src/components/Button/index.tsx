import React, {ReactNode} from 'react';

export interface Props {
  label: string;
  backgroundColor: string;
}

export function Button({label, backgroundColor}: Props) {
  return (
    <button style={backgroundColor ? { backgroundColor }: {}} >
      {label}
    </button>
  )
}