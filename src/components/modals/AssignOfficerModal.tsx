import React, { useState, useMemo } from 'react';
import type { Unit, Personnel } from '../../types';
import { Modal } from './Modal';
import { PlusIcon } from '../icons/Icons';

interface AssignOfficerModalProps {
    unit: Unit;
    personnelList: Personnel[];
    isOpen: boolean;
    onClose: () => void;
    onSave: (unitId: string, officer: Personnel, personnelCount: number) => void;
}

export const AssignOfficerModal: React.FC<AssignOfficerModalProps> = ({ unit, personnelList, isOpen, onClose, onSave }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOfficer, setSelectedOfficer] = useState<Personnel | null>(null);
    const [personnelCount, setPersonnelCount] = useState<string>(unit.personnelCount?.toString() || '');

    const filteredPersonnel = useMemo(() => {
        if (!searchTerm) return [];
        return personnelList.filter(p =>
            p.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.lp.includes(searchTerm)
        ).slice(0, 5);
    }, [searchTerm, personnelList]);

    const handleSave = () => {
        if (selectedOfficer && personnelCount) {
            onSave(unit.id, selectedOfficer, parseInt(personnelCount, 10));
        }
    };
    
    const handleSelectOfficer = (officer: Personnel) => {
        setSelectedOfficer(officer);
        setSearchTerm(`${officer.lastName.toUpperCase()}, ${officer.firstName}`);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Asignar Oficial">
            <div className="space-y-6">
                <p className="font-semibold">Unidad: <span className="font-bold text-yellow-400">{unit.id}</span></p>

                <div className="bg-gray-700 p-4 rounded-md">
                    <label htmlFor="search-officer" className="block text-sm font-medium text-blue-300 mb-2">Oficial a Cargo</label>
                    <p className="text-xs text-gray-400 mb-2">Buscar Oficial (por Nombre, Apellido o LP)</p>
                    <input
                        id="search-officer"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {searchTerm && filteredPersonnel.length > 0 && (
                        <ul className="mt-2 bg-gray-900 border border-gray-600 rounded-md">
                            {filteredPersonnel.map(p => (
                                <li
                                    key={p.lp}
                                    onClick={() => handleSelectOfficer(p)}
                                    className="p-2 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-b-0"
                                >
                                    <p className="font-bold">{p.lastName.toUpperCase()}, {p.firstName}</p>
                                    <p className="text-xs text-gray-400">Capitan - LP: {p.lp}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="bg-gray-700 p-4 rounded-md">
                    <label htmlFor="personnel-count" className="block text-sm font-medium text-blue-300 mb-2">Dotación de la Unidad</label>
                    <p className="text-xs text-gray-400 mb-2">Cantidad Total de Personal</p>
                    <input
                        id="personnel-count"
                        type="number"
                        value={personnelCount}
                        onChange={(e) => setPersonnelCount(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                
                 <div className="bg-gray-700 p-4 rounded-md">
                    <label htmlFor="add-personnel" className="block text-sm font-medium text-blue-300 mb-2">Agregar Personal a la Lista (Opcional)</label>
                    <div className="flex">
                        <input
                            id="add-personnel"
                            type="text"
                            placeholder="Nombre y Apellido"
                            className="w-full bg-gray-800 border border-gray-600 rounded-l-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-700">
                            <PlusIcon className="w-6 h-6 text-white"/>
                        </button>
                    </div>
                </div>

                <footer className="flex justify-end space-x-4 pt-4">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500">Cancelar</button>
                    <button onClick={handleSave} disabled={!selectedOfficer || !personnelCount} className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700 disabled:bg-gray-500 disabled:cursor-not-allowed">Guardar Cambios</button>
                </footer>
            </div>
        </Modal>
    );
};