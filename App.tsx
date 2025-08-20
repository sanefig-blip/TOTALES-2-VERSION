
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { StationSection } from './components/StationSection';
import { AssignOfficerModal } from './components/modals/AssignOfficerModal';
import { UpdateStatusModal } from './components/modals/UpdateStatusModal';
import { UnitNomenclatureModal } from './components/modals/UnitNomenclatureModal';
import type { Zone, Unit, UnitStatus, Personnel, ModalType } from './types';
import { ZONES_DATA, PERSONNEL_DATA } from './data/mockData';

const App: React.FC = () => {
    const [zones, setZones] = useState<Zone[]>(ZONES_DATA);
    const [personnel] = useState<Personnel[]>(PERSONNEL_DATA);
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

    const handleOpenModal = useCallback((modal: ModalType, unit?: Unit) => {
        if (unit) {
            setSelectedUnit(unit);
        }
        setActiveModal(modal);
    }, []);

    const handleCloseModal = useCallback(() => {
        setActiveModal(null);
        setSelectedUnit(null);
    }, []);

    const updateUnitData = (unitId: string, updatedData: Partial<Unit>) => {
        const newZones = zones.map(zone => ({
            ...zone,
            stations: zone.stations.map(station => ({
                ...station,
                units: station.units.map(unit =>
                    unit.id === unitId ? { ...unit, ...updatedData } : unit
                ),
            })),
        }));
        setZones(newZones);
    };

    const handleAssignOfficer = useCallback((unitId: string, officer: Personnel, personnelCount: number) => {
        updateUnitData(unitId, {
            officerInCharge: {
                rank: officer.rank,
                name: `${officer.lastName}, ${officer.firstName}`,
                lp: officer.lp
            },
            personnelCount: personnelCount,
        });
        handleCloseModal();
    }, [zones, handleCloseModal]);

    const handleUpdateStatus = useCallback((unitId: string, status: UnitStatus, reason?: string) => {
        updateUnitData(unitId, { status, statusReason: reason });
        handleCloseModal();
    }, [zones, handleCloseModal]);

    return (
        <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
            <Header onOpenModal={handleOpenModal} />
            <main className="p-4 sm:p-6 lg:p-8">
                {zones.map(zone => (
                    <div key={zone.id}>
                        <h2 className="text-2xl font-bold text-red-500 mb-4 tracking-wider uppercase">{zone.name}</h2>
                        {zone.stations.map(station => (
                            <StationSection
                                key={station.id}
                                station={station}
                                onAssign={(unit) => handleOpenModal('assignOfficer', unit)}
                                onUpdateStatus={(unit) => handleOpenModal('updateStatus', unit)}
                            />
                        ))}
                    </div>
                ))}
            </main>

            {selectedUnit && activeModal === 'assignOfficer' && (
                <AssignOfficerModal
                    unit={selectedUnit}
                    personnelList={personnel}
                    isOpen={true}
                    onClose={handleCloseModal}
                    onSave={handleAssignOfficer}
                />
            )}
            
            {selectedUnit && activeModal === 'updateStatus' && (
                <UpdateStatusModal
                    unit={selectedUnit}
                    isOpen={true}
                    onClose={handleCloseModal}
                    onSave={handleUpdateStatus}
                />
            )}

            {activeModal === 'nomenclature' && (
                <UnitNomenclatureModal
                    isOpen={true}
                    onClose={handleCloseModal}
                    zones={zones}
                />
            )}
        </div>
    );
};

export default App;
