type TProps = {
  children: React.ReactNode;
};

function Layout({ children }: TProps) {
  return (
    <div className='flex min-h-full'>
      <div className='fixed bottom-0 left-0 h-[45%] w-full bg-gray-100' />
      {children}
    </div>
  );
}

export default Layout;
