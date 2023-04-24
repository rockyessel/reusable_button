# Learn how to create a reusable component in React.js
So before we start, I would like to show you what the code for the reusable custom button is going to look like.

```js
import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      className={`${props.styles} ...`}
      type={props?.type}
      title={props.title}
      disabled={props.disabled}
      onClick={props?.handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

```
If you're interested in this artcle, you can follow this <a href='https://rockyessel.hashnode.dev/how-to-create-a-reactjstypescript-reusable-custom-button-component-with-tailwindcss'>link</a>
