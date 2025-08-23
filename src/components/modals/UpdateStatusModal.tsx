import React, { useState } from 'react';
import type { Unit } from '../../types';
import { UnitStatus } from '../../types';
import { Modal } from './Modal';

interface UpdateStatusModalProps {
    unit: Unit;
    isOpen: boolean;
    onClose: () => void;
    onSave: (unitId: string, status: UnitStatus, reason?: string) => void;
}

const statusOptions: { label: string, value: UnitStatus, color: string }[] = [
    { label: 'Unidad Integrando Fuerza o Servicio', value: UnitStatus.InService, color: 'purple-500' },
    { label: 'Para Servicio', value: UnitStatus.InService, color: 'gray-400' },
    { label: 'Reserva', value: UnitStatus.Reserve, color: 'green-500' },
    { label: 'Alternativa', value: UnitStatus.Alternative, color: 'yellow-500' },
    { label: 'A Prestamo', value: UnitStatus.OnLoan, color: 'gray-400' },
    { label: 'Fuera de Servicio', value: UnitStatus.OutOfService, color: 'red-500' },
];

export const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({ unit, isOpen, onClose, onSave }) => {
    const [selectedStatus, setSelectedStatus] = useState<UnitStatus>(unit.status);
    const [reason, setReason] = useState('');

    const handleSave = () => {
        onSave(unit.id, selectedStatus, reason);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Actualizar Estado">
            <div className="space-y-6">
                <p className="font-semibold">Unidad: <span className="font-bold text-yellow-400">{unit.id}</span></p>

                <div>
                    <label className="block text-sm font-medium text-blue-300 mb-2">Seleccionar Nuevo Estado</label>
                    <div className="space-y-2">
                        {statusOptions.map(option => (
                            <button
                                key={option.value + option.label}
                                onClick={() => setSelectedStatus(option.value)}
                                className={`w-full text-left p-3 rounded-md flex items-center transition-all duration-200 ${selectedStatus === option.value ? `ring-2 ring-offset-2 ring-offset-gray-800 ring-${option.color}` : 'bg-gray-700 hover:bg-gray-600'}`}
                            >
                                <span className={`w-4 h-4 rounded-full mr-3 bg-${option.color}`}></span>
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                {selectedStatus === UnitStatus.OutOfService && (
                     <div className="bg-gray-700 p-4 rounded-md">
                        <label htmlFor="reason" className="block text-sm font-medium text-blue-300 mb-2">Motivo (Opcional)</label>
                        <input
                            id="reason"
                            type="text"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Ej. Falta de personal, Problema mecánico"
                            className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                )}
                
                <footer className="flex justify-end space-x-4 pt-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500">Cancelar</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">Guardar Cambios</button>
                </footer>
            </div>
        </Modal>
    );
};