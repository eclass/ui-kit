export declare type icon = 'schedule' | 'certificate' | 'circularCheck' | 'progress' | 'circularInformation';
export declare const dataBase: {
    name: string;
    background: string;
    logo: string;
    logoAlt: string;
    status: {
        id: number;
        name: string;
        detail: string;
        style: string;
    };
    Profile: {
        id: number;
        name: string;
    };
    progress: {
        label: string;
        icon: string;
        progress: number;
        isApproved: boolean;
        finalGrade: string;
    };
    dateStatus: {
        hasDates: boolean;
        init: string;
        end: string;
    };
    information: {
        icon: string;
        text: string;
        href: string;
    }[];
    action: {
        enabled: boolean;
        text: string;
        hasIcon: boolean;
        href: string;
        targetBlank: boolean;
    };
    labels: {
        id: string;
        text: string;
    }[];
};
export declare const dataStates: any;
export declare const dataFake: any[];
