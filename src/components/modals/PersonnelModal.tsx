
import React, { useState, useMemo, useEffect } from 'react';
import type { Personnel } from '../../types.ts';
import { Modal } from './Modal.tsx';
import { SearchIcon, PlusIcon, EditIcon, TrashIcon, XIcon } from '../icons/Icons.tsx';

interface PersonnelModalProps {
    isOpen: boolean;
    onClose: () => void;
    personnelList: Personnel[];
    onAdd: (personnel: Personnel) => void;
    onUpdate: (personnel: Personnel) => void;
    onDelete: (lp: string) => void;
}

const PersonnelForm: React.FC<{
    personnel: Personnel | null;
    onSave: (personnel: Personnel) => void;
    onCancel: () => void;
}> = ({ personnel, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        lp: '',
        rank: '',
        lastName: '',
        firstName: '',
    });

    useEffect(() => {
        if (personnel) {
            setFormData(personnel);
        } else {
            setFormData({ lp: '', rank: '', lastName: '', firstName: '' });
        }
    }, [personnel]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };
    
    const isEditing = !!personnel;

    return (
        <form onSubmit={handleSubmit} className="bg-gray-700 p-4 rounded-lg mb-4 space-y-4">
             <h3 className="text-lg font-semibold text-white">{isEditing ? 'Editar Personal' : 'Agregar Nuevo Personal'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <input name="lp" value={formData.lp} onChange={handleChange} placeholder="LP" disabled={isEditing} required className="bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-red-500 focus:border-red-500 disabled:opacity-50"/>
                <input name="rank" value={formData.rank} onChange={handleChange} placeholder="Rango" required className="bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-red-500 focus:border-red-500" />
                <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Apellido" required className="bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-red-500 focus:border-red-500" />
                <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nombre" required className="bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-red-500 focus:border-red-500" />
            </div>
            <div className="flex justify-end space-x-3">
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-500">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">{isEditing ? 'Guardar Cambios' : 'Agregar Personal'}</button>
            </div>
        </form>
    );
};


export const PersonnelModal: React.FC<PersonnelModalProps> = ({ isOpen, onClose, personnelList, onAdd, onUpdate, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingPersonnel, setEditingPersonnel] = useState<Personnel | null>(null);

    const filteredPersonnel = useMemo(() => {
        if (!searchTerm) return personnelList;
        const lowercasedFilter = searchTerm.toLowerCase();
        return personnelList.filter(p =>
            p.lp.toLowerCase().includes(lowercasedFilter) ||
            p.rank.toLowerCase().includes(lowercasedFilter) ||
            p.lastName.toLowerCase().includes(lowercasedFilter) ||
            p.firstName.toLowerCase().includes(lowercasedFilter)
        );
    }, [searchTerm, personnelList]);
    
    const handleAddNew = () => {
        setEditingPersonnel(null);
        setIsFormOpen(true);
    };
    
    const handleEdit = (personnel: Personnel) => {
        setEditingPersonnel(personnel);
        setIsFormOpen(true);
    };

    const handleSave = (personnel: Personnel) => {
        if(editingPersonnel) {
            onUpdate(personnel);
        } else {
            onAdd(personnel);
        }
        setIsFormOpen(false);
        setEditingPersonnel(null);
    };
    
    const handleCancel = () => {
        setIsFormOpen(false);
        setEditingPersonnel(null);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Gestionar Personal" size="4xl">
            <div className="flex flex-col h-[70vh]">
                <div className="flex justify-between items-center mb-4">
                    <div className="relative w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Buscar por LP, rango, nombre..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 pl-10 focus:ring-red-500 focus:border-red-500"
                        />
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    {!isFormOpen && (
                        <button onClick={handleAddNew} className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700">
                            <PlusIcon className="w-5 h-5 mr-2" />
                            Agregar Personal
                        </button>
                    )}
                </div>

                {isFormOpen && <PersonnelForm personnel={editingPersonnel} onSave={handleSave} onCancel={handleCancel} />}
                
                <div className="flex-grow overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs text-gray-300 uppercase bg-gray-700 sticky top-0">
                            <tr>
                                <th scope="col" className="px-6 py-3">LP</th>
                                <th scope="col" className="px-6 py-3">Rango</th>
                                <th scope="col" className="px-6 py-3">Apellido</th>
                                <th scope="col" className="px-6 py-3">Nombre</th>
                                <th scope="col" className="px-6 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPersonnel.map(p => (
                                <tr key={p.lp} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">{p.lp}</th>
                                    <td className="px-6 py-4">{p.rank}</td>
                                    <td className="px-6 py-4">{p.lastName}</td>
                                    <td className="px-6 py-4">{p.firstName}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex space-x-3">
                                            <button onClick={() => handleEdit(p)} className="text-blue-400 hover:text-blue-300"><EditIcon className="w-5 h-5"/></button>
                                            <button onClick={() => onDelete(p.lp)} className="text-red-400 hover:text-red-300"><TrashIcon className="w-5 h-5"/></button>
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