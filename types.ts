
export enum UnitStatus {
    InService = 'In Service',
    OutOfService = 'Out of Service',
    Reserve = 'Reserve',
    OnLoan = 'On Loan',
    Alternative = 'Alternative',
}

export interface Unit {
    id: string;
    type: string;
    status: UnitStatus;
    statusReason?: string;
    officerInCharge: {
        rank: string;
        name: string;
        lp: string;
    } | null;
    personnelCount: number | null;
}

export interface Station {
    id: string;
    name: string;
    units: Unit[];
}

export interface Zone {
    id: string;
    name: string;
    stations: Station[];
}

export interface Personnel {
    lp: string;
    rank: string;
    lastName: string;
    firstName: string;
}

export type ModalType = 'assignOfficer' | 'updateStatus' | 'nomenclature' | 'personnel' | 'internos' | 'registros' | null;

