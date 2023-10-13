import type { IconProps } from '@radix-ui/react-icons/dist/types';

type TProps = {
  name: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  width?: number;
  height?: number;
  className?: string;
};

function Icon({ name: SVGElement, width = 16, height = 16 }: TProps) {
  return (
    <SVGElement
      className='m-auto'
      width={width}
      height={height}
    />
  );
}

export default Icon;
