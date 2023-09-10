import * as Type from '../../types';
interface PaymentModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    showOverlay: boolean;
    modalPaymentText: Type.PaymentText;
}
export declare function PaymentModal({ isOpen, onOpen, onClose, showOverlay, modalPaymentText, }: PaymentModalProps): JSX.Element | null;
export {};
