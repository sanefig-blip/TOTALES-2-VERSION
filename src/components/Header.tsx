import React from 'react';
import type { ModalType } from '../types';
import { UserIcon, FileTextIcon, ListIcon, BookIcon, LogOutIcon, ArrowRightIcon } from './icons/Icons';

interface HeaderProps {
    onOpenModal: (modal: ModalType) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
    return (
        <header className="bg-gray-800 shadow-md">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold text-red-500 uppercase tracking-wider">Unidades de Bomberos</h1>
                    <nav className="hidden md:flex items-center space-x-2">
                        <button onClick={() => onOpenModal('nomenclature')} className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600">
                            <ListIcon className="w-4 h-4 mr-2" />
                            Nomenclador
                        </button>
                        <button onClick={() => onOpenModal('personnel')} className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600">
                            <UserIcon className="w-4 h-4 mr-2" />
                            Personal
                        </button>
                        <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600">
                           <ListIcon className="w-4 h-4 mr-2" />
                            Internos
                        </button>
                        <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600">
                            <BookIcon className="w-4 h-4 mr-2" />
                            Registros
                        </button>
                         <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600">
                            <FileTextIcon className="w-4 h-4 mr-2" />
                            PDF
                        </button>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-right">
                        <p className="font-semibold text-white">O.C.O.B.</p>
                        <p className="text-xs text-gray-400">Admin</p>
                    </div>
                    <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600">
                        <ArrowRightIcon className="w-5 h-5" />
                    </button>
                     <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600">
                        <LogOutIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};