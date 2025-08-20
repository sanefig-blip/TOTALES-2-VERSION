
import React from 'react';
import type { Station, Unit } from '../types.ts';
import { UnitCard } from './UnitCard.tsx';

interface StationSectionProps {
    station: Station;
    onAssign: (unit: Unit) => void;
    onUpdateStatus: (unit: Unit) => void;
}

export const StationSection: React.FC<StationSectionProps> = ({ station, onAssign, onUpdateStatus }) => {
    return (
        <section className="mb-12">
            <h3 className="text-lg font-semibold text-gray-400 mb-4 pb-2 border-b-2 border-gray-700">{station.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {station.units.map(unit => (
                    <UnitCard 
                        key={unit.id} 
                        unit={unit}
                        onAssign={() => onAssign(unit)}
                        onUpdateStatus={() => onUpdateStatus(unit)}
                    />
                ))}
            </div>
        </section>
    );
};