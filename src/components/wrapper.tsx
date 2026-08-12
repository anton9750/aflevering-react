type WrapperProps = {
  children: React.ReactNode;
};

// Komponent
export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="wrapper">{children}</div>;
};

