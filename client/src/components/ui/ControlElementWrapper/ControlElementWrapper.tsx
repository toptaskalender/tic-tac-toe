type TProps = {
  label?: string;
  children: React.ReactNode;
};

function ControlElementWrapper({ label = '', children }: TProps) {
  const withLabel = label?.trim();

  return (
    <div>
      {withLabel && <label className='font-medium'>{label}</label>}
      {children}
    </div>
  );
}

export default ControlElementWrapper;
