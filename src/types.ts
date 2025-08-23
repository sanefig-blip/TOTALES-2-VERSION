
export enum UnitStatus {
    InService = 'En Servicio',
    OutOfService = 'Fuera de Servicio',
    Reserve = 'Reserva',
    OnLoan = 'A Préstamo',
    Alternative = 'Alternativa',
}

export interface Personnel {
    lp: string;
    rank: string;
    lastName: string;
    firstName: string;
}

export interface Unit {
    id: string;
    type: string;
    status: UnitStatus;
    officerInCharge: Personnel | null;
    personnelCount: number | null;
}

export interface Station {
    name: string;
    units: Unit[];
}

export interface Zone {
    name: string;
    stations: Station[];
}

export type ModalType = 'nomenclature' | 'personnel';
