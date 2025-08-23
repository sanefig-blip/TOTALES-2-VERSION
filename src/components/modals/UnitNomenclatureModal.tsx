import React, { useState, useMemo } from 'react';
import type { Zone, Unit } from '../../types';
import { Modal } from './Modal';
import { SearchIcon, PlusIcon, EditIcon, TrashIcon } from '../icons/Icons';

interface UnitNomenclatureModalProps {
    isOpen: boolean;
    onClose: () => void;
    zones: Zone[];
}

type FlatUnit = Unit & {
    stationName: string;
    zoneName: string;
};

export const UnitNomenclatureModal: React.FC<UnitNomenclatureModalProps> = ({ isOpen, onClose, zones }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const allUnits: FlatUnit[] = useMemo(() => {
        return zones.flatMap(zone =>
            zone.stations.flatMap(station =>
                station.units.map(unit => ({
                    ...unit,
                    stationName: station.name,
                    zoneName: zone.name,
                }))
            )
        );
    }, [zones]);
    
    const filteredUnits = useMemo(() => {
        if (!searchTerm) return allUnits;
        const lowercasedFilter = searchTerm.toLowerCase();
        return allUnits.filter(unit =>
            unit.id.toLowerCase().includes(lowercasedFilter) ||
            unit.type.toLowerCase().includes(lowercasedFilter) ||
            unit.stationName.toLowerCase().includes(lowercasedFilter) ||
            unit.zoneName.toLowerCase().includes(lowercasedFilter)
        );
    }, [searchTerm, allUnits]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Nomenclador de Unidades" size="4xl">
            <div className="flex flex-col h-[70vh]">
                <p className="text-sm text-gray-400 mb-4">Gestionar el parque automotor.</p>
                <div className="flex justify-between items-center mb-4">
                    <div className="relative w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Buscar por nombre, ID, interno, estación, tipo..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 pl-10 focus:ring-red-500 focus:border-red-500"
                        />
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    <button className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700">
                        <PlusIcon className="w-5 h-5 mr-2" />
                        Agregar Unidad
                    </button>
                </div>
                
                <div className="flex-grow overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs text-gray-300 uppercase bg-gray-700 sticky top-0">
                            <tr>
                                <th scope="col" className="px-6 py-3">Nombre (ID)</th>
                                <th scope="col" className="px-6 py-3">N° Interno</th>
                                <th scope="col" className="px-6 py-3">Tipo</th>
                                <th scope="col" className="px-6 py-3">Estación / Zona</th>
                                <th scope="col" className="px-6 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUnits.map(unit => (
                                <tr key={unit.id} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        {unit.id}
                                    </th>
                                    <td className="px-6 py-4">-</td>
                                    <td className="px-6 py-4">{unit.type}</td>
                                    <td className="px-6 py-4">{unit.stationName} <br /> <span className="text-xs text-gray-500">{unit.zoneName}</span></td>
                                    <td className="px-6 py-4">
                                        <div className="flex space-x-3">
                                            <button className="text-blue-400 hover:text-blue-300"><EditIcon className="w-5 h-5"/></button>
                                            <button className="text-red-400 hover:text-red-300"><TrashIcon className="w-5 h-5"/></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Modal>
    );
};