import { FC } from 'react';
import { PlacementWithLogical } from '@chakra-ui/react';
interface TooltipProps {
    className?: string;
    label?: React.ReactNode;
    isDisabled?: boolean;
    m?: string;
    maxWidth?: string;
    placement?: PlacementWithLogical;
}
export declare const NewTooltip: FC<TooltipProps>;
export {};
