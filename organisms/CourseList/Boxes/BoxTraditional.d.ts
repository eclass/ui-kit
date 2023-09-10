import * as React from 'react';
import * as Type from '../types';
export declare const CourseBoxContext: React.Context<Partial<import("@eclass/api").AcademicBox>>;
interface IBoxTraditional {
    data: Type.AcademicList;
    modalPaymentText?: Type.PaymentText;
}
export declare function BoxTraditional({ data, modalPaymentText }: IBoxTraditional): JSX.Element;
export declare namespace BoxTraditional {
    var displayName: string;
}
export {};
