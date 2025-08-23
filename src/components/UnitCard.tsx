import React from 'react';
import type { Unit } from '../types.ts';
import { UnitStatus } from '../types.ts';
import { CogIcon, PlusIcon, EditIcon, UserIcon, UsersIcon } from './icons/Icons.tsx';

interface UnitCardProps {
    unit: Unit;
    onAssign: () => void;
    onUpdateStatus: () => void;
}

interface StatusBadgeProps {
    status: UnitStatus;
    unitId: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, unitId }) => {
    const statusStyles: Record<UnitStatus, string> = {
        [UnitStatus.InService]: 'bg-green-500 text-white',
        [UnitStatus.OutOfService]: 'bg-red-500 text-white',
        [UnitStatus.Reserve]: 'bg-yellow-500 text-black',
        [UnitStatus.OnLoan]: 'bg-blue-500 text-white',
        [UnitStatus.Alternative]: 'bg-purple-500 text-white',
    };

    const statusDot: Record<UnitStatus, string> = {
        [UnitStatus.InService]: 'bg-green-400',
        [UnitStatus.OutOfService]: 'bg-red-400',
        [UnitStatus.Reserve]: 'bg-yellow-400',
        [UnitStatus.OnLoan]: 'bg-blue-400',
        [UnitStatus.Alternative]: 'bg-purple-400',
    }

    const hasBadge = status === UnitStatus.Reserve || status === UnitStatus.OutOfService || status === UnitStatus.OnLoan;

    return (
        <div className="flex items-center space-x-2">
             <span className={`w-3 h-3 rounded-full ${statusDot[status]}`}></span>
            <p className="font-bold text-lg text-gray-200">{unitId}</p>
            {hasBadge && <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${statusStyles[status]}`}>{status}</span>}
        </div>
    );
};

export const UnitCard: React.FC<UnitCardProps> = ({ unit, onAssign, onUpdateStatus }) => {
    const hasAssignment = unit.officerInCharge && unit.personnelCount;

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between h-56 transition-all duration-300 hover:shadow-cyan-500/50 hover:ring-1 hover:ring-cyan-500">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <StatusBadge status={unit.status} unitId={unit.id} />
                        <p className={`text-sm font-medium ${unit.status === UnitStatus.OutOfService ? 'text-red-400' : 'text-red-500'}`}>{unit.type}</p>
                    </div>
                </div>

                <div className="text-sm text-gray-400 h-16">
                    {hasAssignment ? (
                        <>
                            <p className="font-semibold text-gray-300">OFICIAL A CARGO</p>
                            <p className="text-yellow-400 font-bold">{unit.officerInCharge?.rank} {unit.officerInCharge?.name}</p>
                            <p className="text-xs">LP: {unit.officerInCharge?.lp}</p>
                            <div className="flex items-center mt-1">
                                <UsersIcon className="w-4 h-4 mr-2" />
                                <span className="font-bold">{unit.personnelCount}</span>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p>Sin Asignación</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                    <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600"><CogIcon className="w-4 h-4" /></button>
                    <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600"><UserIcon className="w-4 h-4" /></button>
                    <button onClick={onUpdateStatus} className="p-2 bg-gray-700 rounded-md hover:bg-gray-600"><PlusIcon className="w-4 h-4" /></button>
                </div>
                {hasAssignment ? (
                     <button onClick={onAssign} className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        <EditIcon className="w-4 h-4 mr-2" />
                        Editar
                    </button>
                ) : (
                    <button onClick={onAssign} className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        Asignar
                    </button>
                )}
            </div>
        </div>
    );
};