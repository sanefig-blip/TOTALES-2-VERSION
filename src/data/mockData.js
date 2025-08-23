import type { Zone, Personnel } from '../types.js';
import { UnitStatus } from '../types.js';

export const PERSONNEL_DATA: Personnel[] = [
    { lp: '71.820', rank: 'Capitan', lastName: 'Schreiner', firstName: 'Maximiliano G.' },
    { lp: '71.020', rank: 'Bro. Cdo', lastName: 'Cano', firstName: '' },
    { lp: '1159704458', rank: 'Teniente', lastName: 'Guerrero', firstName: '' },
    { lp: '1143265670', rank: 'Teniente', lastName: 'Candia', firstName: '' },
    { lp: '1133807790', rank: 'Bro. Cdo', lastName: 'Methey Doret', firstName: '' },
    { lp: '1153628440', rank: 'Teniente', lastName: 'Fernandez', firstName: '' },
    { lp: '71.441', rank: 'Capitan', lastName: 'Chiardi', firstName: 'Adrian M.' },
    { lp: '73.410', rank: 'Capitan', lastName: 'Gimenez Almada', firstName: 'Matias L.' },
    { lp: '60.126', rank: 'Capitan', lastName: 'Sanchez', firstName: 'Carlos A.' },
    { lp: 'placeholder-lp-1', rank: 'Capitan', lastName: 'Padilla', firstName: '' },
    { lp: 'placeholder-lp-2', rank: 'Bro. Sup', lastName: 'Gamarra', firstName: '' },
    { lp: 'placeholder-lp-3', rank: 'Bro. Sup', lastName: 'Artaza', firstName: '' },
    { lp: 'placeholder-lp-4', rank: 'Bro. Sup', lastName: 'Blanco', firstName: '' },
    { lp: 'placeholder-lp-5', rank: 'Subtte', lastName: 'Rocha', firstName: '' },
    { lp: 'placeholder-lp-6', rank: 'Capitan', lastName: 'Hermann', firstName: '' },
    { lp: 'placeholder-lp-7', rank: 'Teniente', lastName: 'Cabanelas', firstName: '' },
    { lp: 'placeholder-lp-8', rank: 'Capitan', lastName: 'Nittolo', firstName: '' },
    { lp: 'placeholder-lp-9', rank: 'Subteniente', lastName: 'Ventieri', firstName: '' },
    { lp: 'placeholder-lp-10', rank: 'Bro. Calif.', lastName: 'Ruiz Diaz', firstName: '' },
    { lp: 'placeholder-lp-11', rank: 'Bro. Sup.', lastName: 'Galvan', firstName: '' },
    { lp: 'placeholder-lp-12', rank: 'Teniente', lastName: 'Correa', firstName: '' },
    { lp: 'placeholder-lp-13', rank: 'Subteniente', lastName: 'Solari', firstName: '' },
    { lp: 'placeholder-lp-14', rank: 'Teniente', lastName: 'Zurita', firstName: '' },
    { lp: 'placeholder-lp-15', rank: 'Bro. Sup', lastName: 'Moreno', firstName: '' },
    { lp: 'placeholder-lp-16', rank: 'Teniente', lastName: 'San Pedro', firstName: '' },
    { lp: 'placeholder-lp-17', rank: 'Teniente', lastName: 'Cardama', firstName: '' },
    { lp: 'placeholder-lp-18', rank: 'Teniente', lastName: 'Romeo', firstName: '' },
    { lp: 'placeholder-lp-19', rank: 'Bro. Sup.', lastName: 'Franco', firstName: '' },
    { lp: 'placeholder-lp-20', rank: 'Teniente', lastName: 'Barros', firstName: '' },
    { lp: 'placeholder-lp-21', rank: 'Bro. Cdo.', lastName: 'Picasso', firstName: '' },
    { lp: 'placeholder-lp-22', rank: 'Bro. Cdo', lastName: 'Mayor', firstName: '' },
    { lp: 'placeholder-lp-23', rank: 'Teniente', lastName: 'Farias', firstName: '' },
    { lp: 'placeholder-lp-24', rank: 'Teniente', lastName: 'Reynoso', firstName: '' },
    { lp: 'placeholder-lp-25', rank: 'Teniente', lastName: 'Mahmud', firstName: '' },
    { lp: 'placeholder-lp-26', rank: 'Bro Cdo', lastName: 'Jaureguiberry', firstName: '' },
    { lp: 'placeholder-lp-27', rank: 'Bro Cdo', lastName: 'Ordoñez', firstName: '' },
    { lp: 'placeholder-lp-28', rank: 'Teniente', lastName: 'Acevedo', firstName: '' },
    { lp: 'placeholder-lp-29', rank: 'Subtte.', lastName: 'Chocobar', firstName: '' },
    { lp: 'placeholder-lp-30', rank: 'Bro. Sup', lastName: 'Martino', firstName: '' },
    { lp: 'placeholder-lp-31', rank: 'Bro. Cdo', lastName: 'Osman', firstName: '' },
    { lp: 'placeholder-lp-32', rank: 'Teniente', lastName: 'Day Vivas', firstName: '' },
    { lp: 'placeholder-lp-33', rank: 'Bro Sup.', lastName: 'Rivero', firstName: '' },
    { lp: 'placeholder-lp-34', rank: 'Subtte', lastName: 'Ramirez', firstName: '' },
    { lp: 'placeholder-lp-35', rank: 'Subtte', lastName: 'Garcia', firstName: '' },
    { lp: 'placeholder-lp-36', rank: 'Teniente', lastName: 'Freire', firstName: '' },
    { lp: 'placeholder-lp-37', rank: 'Capitan', lastName: 'Ferreiro Vargas', firstName: '' },
    { lp: 'placeholder-lp-38', rank: 'Capitan', lastName: 'Di Mango', firstName: '' },
    { lp: 'placeholder-lp-39', rank: 'Capitan', lastName: 'Meaolo', firstName: '' },
    { lp: 'placeholder-lp-40', rank: 'Subtte.', lastName: 'Castelli', firstName: '' },
    { lp: 'placeholder-lp-41', rank: 'Bro. Sup', lastName: 'Avelino', firstName: '' },
    { lp: 'placeholder-lp-42', rank: 'Bro. Sup', lastName: 'Colarossi', firstName: '' },
    { lp: 'placeholder-lp-43', rank: 'Teniente', lastName: 'Muzzicato', firstName: '' },
    { lp: 'placeholder-lp-44', rank: 'Subteniente', lastName: 'Brandan', firstName: '' },
    { lp: 'placeholder-lp-45', rank: 'Teniente', lastName: 'Douat', firstName: '' },
    { lp: 'placeholder-lp-46', rank: 'Teniente', lastName: 'Rios', firstName: '' },
    { lp: 'placeholder-lp-47', rank: 'Subteniente', lastName: 'Pistoia', firstName: '' },
    { lp: 'placeholder-lp-48', rank: 'Inspector', lastName: 'Di Mango', firstName: '' },
    { lp: 'placeholder-lp-49', rank: 'Subinspector', lastName: 'Arbe', firstName: '' },
    { lp: 'placeholder-lp-50', rank: 'Ayudante', lastName: 'Tevez', firstName: '' },
];


export const ZONES_DATA: Zone[] = [
    {
        id: 'zona-i',
        name: 'ZONA I',
        stations: [
            {
                id: 'estacion-i-puerto-madero',
                name: 'ESTACIÓN I PUERTO MADERO',
                units: [
                    { id: 'IV-2638', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Schreiner', lp: '71.820' }, personnelCount: 8 },
                    { id: 'FR-2105', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Cdo', name: 'Cano', lp: '71.020' }, personnelCount: 1 },
                    { id: 'FZ-2666', type: 'Unidad Liviana', status: UnitStatus.InService, officerInCharge: null, personnelCount: null },
                    { id: 'BICICLETA-276', type: 'Bicicleta', status: UnitStatus.InService, officerInCharge: null, personnelCount: null },
                    { id: 'BICICLETA-277', type: 'Bicicleta', status: UnitStatus.InService, officerInCharge: null, personnelCount: null },
                    { id: 'POLARIS-6441', type: 'Cuatriciclo', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'BICICLETA-275', type: 'Bicicleta', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'YAM-3981', type: 'Cuatriciclo', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'POLARIS-3236', type: 'Cuatriciclo', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'estacion-ii-patricios',
                name: 'ESTACIÓN II PATRICIOS',
                units: [
                    { id: 'IV-2640', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Guerrero', lp: '1159704458' }, personnelCount: 3 },
                    { id: 'IV-9005', type: 'Cisterna', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Candia', lp: '1143265670' }, personnelCount: 3 },
                    { id: 'FR-2107', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Cdo.', name: 'Methey Doret', lp: '1133807790' }, personnelCount: 1 },
                    { id: 'ZFD-2680', type: 'Autobomba Liviana', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Fernandez', lp: '1153628440' }, personnelCount: 1 },
                    { id: 'BER-1168', type: 'BERLINGO', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'MB-2672', type: 'Autobomba', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'ZONDA-2656', type: 'Autobomba Liviana', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'MB-2651', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'CAT-DISEL', type: 'Iluminación', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'destacamento-pompeya',
                name: 'DESTACAMENTO POMPEYA',
                units: [
                    { id: 'MB-9173', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Fernandez', lp: '1153628440' }, personnelCount: 4 },
                ]
            },
            {
                id: 'estacion-iii-barracas',
                name: 'ESTACIÓN III BARRACAS',
                units: [
                    { id: 'IV-2641', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Padilla', lp: 'placeholder-lp-1' }, personnelCount: 9 },
                    { id: 'IV-9000', type: 'Cisterna', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Sup', name: 'Gamarra', lp: 'placeholder-lp-2' }, personnelCount: 3 },
                    { id: 'FR-2125', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Sup', name: 'Artaza', lp: 'placeholder-lp-3' }, personnelCount: 1 },
                    { id: 'ZONDA-2665', type: 'Autobomba Liviana', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Sup', name: 'Blanco', lp: 'placeholder-lp-4' }, personnelCount: 2 },
                    { id: 'MB-2662', type: 'Autobomba', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'YAM-3982', type: 'Cuatriciclo', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'destacamento-boca',
                name: 'DESTACAMENTO BOCA',
                units: [
                    { id: 'AGRALE-8371', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Subtte', name: 'Rocha', lp: 'placeholder-lp-5' }, personnelCount: 5 },
                    { id: 'MB-2660', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'ALLIGHT-4608', type: 'Iluminación', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'estacion-x-lugano',
                name: 'ESTACIÓN X LUGANO',
                units: [
                    { id: 'MB-2675', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Hermann', lp: 'placeholder-lp-6' }, personnelCount: 10 },
                    { id: 'F.R.-2123', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Cabanelas', lp: 'placeholder-lp-7' }, personnelCount: 2 },
                    { id: 'YAM-3986', type: 'Cuatriciclo', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'MB-2674', type: 'Autobomba', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'ZONDA-2668', type: 'Autobomba Liviana', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: '4751', type: 'Bote', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'YAM-3985', type: 'Cuatriciclo', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'F.C-2659', type: 'Cisterna', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'IV-170 P.M.A', type: 'Hidroelevador', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'ALLIGHT', type: 'Iluminación', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'MB-9174', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'F.R.-2826', type: 'Camioneta', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            }
        ]
    },
    {
        id: 'zona-ii',
        name: 'ZONA II',
        stations: [
            {
                id: 'estacion-iv-recoleta',
                name: 'ESTACIÓN IV RECOLETA',
                units: [
                    { id: 'IV-2635', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Nittolo', lp: 'placeholder-lp-8' }, personnelCount: 10 },
                    { id: 'FC-2669', type: 'Cisterna', status: UnitStatus.InService, officerInCharge: { rank: 'Subteniente', name: 'Ventieri', lp: 'placeholder-lp-9' }, personnelCount: 2 },
                    { id: 'F.R. 2126', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Calif.', name: 'Ruiz Diaz', lp: 'placeholder-lp-10' }, personnelCount: 1 },
                    { id: 'IV-2642', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: { rank: 'Bro. Sup.', name: 'Galvan', lp: 'placeholder-lp-11' }, personnelCount: 1 },
                    { id: 'BER-1166', type: 'BERLINGO', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'HIFEI S/N°', type: 'Gomon', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'CATERPILLAR', type: 'Iluminación', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'YAM-3983', type: 'Cuatriciclo', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'AGRALE-8371-2', type: 'Autobomba', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'destacamento-miserere',
                name: 'DESTACAMENTO MISERERE',
                units: [
                    { id: 'MB-2673', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Correa', lp: 'placeholder-lp-12' }, personnelCount: 9 },
                ]
            },
            {
                id: 'destacamento-retiro',
                name: 'DESTACAMENTO RETIRO',
                units: [
                    { id: 'ZFD-2658', type: 'Autobomba Liviana', status: UnitStatus.InService, officerInCharge: { rank: 'Subteniente', name: 'Solari', lp: 'placeholder-lp-13' }, personnelCount: 3 },
                ]
            },
            {
                id: 'estacion-v-cte-gral-a-vazquez',
                name: 'ESTACIÓN V CTE. GRAL. A. VAZQUEZ',
                units: [
                    { id: 'MB-2653', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Correa', lp: 'placeholder-lp-12' }, personnelCount: 8 },
                    { id: 'FC-2667', type: 'Cisterna', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Zurita', lp: 'placeholder-lp-14' }, personnelCount: 3 },
                    { id: 'FR-2106', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Sup', name: 'Moreno', lp: 'placeholder-lp-15' }, personnelCount: 1 },
                    { id: 'FR-2110', type: 'Camioneta', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'BER-1161', type: 'BERLINGO', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'HIFEI S/N°-2', type: 'Gomon', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'MERCURY-4752', type: 'Motor', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'YAMAHA-4749', type: 'Gomon', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'YAMAHA-3987', type: 'Cuatriciclo', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'ALLIGHT-96', type: 'Iluminación', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'destacamento-urquiza',
                name: 'DESTACAMENTO URQUIZA',
                units: [
                    { id: 'MB-2660-2', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'San Pedro', lp: 'placeholder-lp-16' }, personnelCount: 6 },
                    { id: 'IV-2636', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'BIM - 3067', type: 'Gomon', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'destacamento-saavedra',
                name: 'DESTACAMENTO SAAVEDRA',
                units: [
                    { id: 'MB-2672-2', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Cardama', lp: 'placeholder-lp-17' }, personnelCount: 5 },
                ]
            },
            {
                id: 'estacion-vi-crio-mayor-m-firma-paz',
                name: 'ESTACIÓN VI CRÍO. MAYOR M. FIRMA PAZ',
                units: [
                    { id: 'IV-2643', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Romeo', lp: 'placeholder-lp-18' }, personnelCount: 9 },
                    { id: 'FORD-9052', type: 'Hidroelevador', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Sup.', name: 'Franco', lp: 'placeholder-lp-19' }, personnelCount: 2 },
                    { id: 'IV-9004', type: 'Cisterna', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Barros', lp: 'placeholder-lp-20' }, personnelCount: 3 },
                    { id: 'JUMPER 2138', type: 'U.A.R.', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Cdo.', name: 'Picasso', lp: 'placeholder-lp-21' }, personnelCount: 2 },
                    { id: 'FR-2118', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Cdo', name: 'Mayor', lp: 'placeholder-lp-22' }, personnelCount: 1 },
                    { id: 'ALLIGHT-2', type: 'Iluminación', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'FORD-2681', type: 'Usina', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'MB-2673-2', type: 'Autobomba', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'ZONDA-2666', type: 'Autobomba Liviana', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'MB-2675-2', type: 'Autobomba', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'C.BER-1171', type: 'Unidad Liviana', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'IV-9051', type: 'Hidroelevador', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'MB-2677', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'FZ-2657', type: 'Unidad Liviana', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'POLARIS-3237', type: 'Sexticiclo', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
        ]
    },
    {
        id: 'zona-iii',
        name: 'ZONA III',
        stations: [
            {
                id: 'destacamento-chacarita',
                name: 'DESTACAMENTO CHACARITA',
                units: [
                    { id: 'ZONDA-2668-2', type: 'Autobomba Liviana', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Reynoso', lp: 'placeholder-lp-24' }, personnelCount: 3 },
                    { id: 'IV-2637', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Farias', lp: 'placeholder-lp-23' }, personnelCount: 7 },
                ]
            },
            {
                id: 'estacion-ix-versailles',
                name: 'ESTACIÓN IX VERSAILLES',
                units: [
                    { id: 'IV-2745', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Mahmud', lp: 'placeholder-lp-25' }, personnelCount: 7 },
                    { id: 'FR-2122', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro Cdo', name: 'Jaureguiberry', lp: 'placeholder-lp-26' }, personnelCount: 2 },
                    { id: 'BER-1212', type: 'BERLINGO', status: UnitStatus.InService, officerInCharge: { rank: 'Bro Cdo', name: 'Ordoñez', lp: 'placeholder-lp-27' }, personnelCount: 2 },
                    { id: 'HIFEI-450495', type: 'Bote Semirrígido', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'BIM-S/N°', type: 'Bote Inflable', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'NIGHTSHIFTER', type: 'Iluminación', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'FC-2671', type: 'Cisterna', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'MB-2676', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'destacamento-devoto',
                name: 'DESTACAMENTO DEVOTO',
                units: [
                    { id: 'MB-2674-2', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Acevedo', lp: 'placeholder-lp-28' }, personnelCount: 8 },
                ]
            },
            {
                id: 'estacion-vii-flores',
                name: 'ESTACIÓN VII FLORES',
                units: [
                    { id: 'MB-2654', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Chiardi', lp: '71.441' }, personnelCount: 10 },
                    { id: 'VW-9319', type: 'Cisterna', status: UnitStatus.InService, officerInCharge: { rank: 'Subtte.', name: 'Chocobar', lp: 'placeholder-lp-29' }, personnelCount: 2 },
                    { id: 'FR-2121', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Sup', name: 'Martino', lp: 'placeholder-lp-30' }, personnelCount: 2 },
                    { id: 'BER-1220', type: 'BERLINGO', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'FORD-9052-2', type: 'Hidroelevador', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'CAT-S/N°', type: 'Iluminación', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'IV-2639', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: '40 HP 4595', type: 'Semirrígido', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'estacion-viii-nueva-chicago',
                name: 'ESTACIÓN VIII NUEVA CHICAGO',
                units: [
                    { id: 'MB-346', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Gimenez Almada', lp: '73.410' }, personnelCount: 8 },
                    { id: 'F. R.-2129', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Cdo', name: 'Osman', lp: 'placeholder-lp-31' }, personnelCount: 2 },
                    { id: 'FC-2670', type: 'Cisterna', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: 2 },
                    { id: 'BER-1184', type: 'BERLINGO', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'HIFEI-4726', type: 'Bote', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'F. TRANSIT-8353', type: 'Unidad Médica', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'F. TRANSIT-8354', type: 'Unidad Médica', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'MB-347', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'ALLIGHT-3', type: 'Iluminación', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'destacamento-velez-sarsfield',
                name: 'DESTACAMENTO VELEZ SARSFIELD',
                units: [
                    { id: 'FC-2671-2', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Sanchez', lp: '60.126' }, personnelCount: 3 },
                ]
            },
            {
                id: 'estacion-xi-albarino',
                name: 'ESTACIÓN XI ALBARIÑO',
                units: [
                    { id: 'FC-2670-2', type: 'Cisterna', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Aranda', lp: '70.895' }, personnelCount: 3 },
                    { id: 'ALLIGHT-4', type: 'Iluminación', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'MB 9173', type: 'Autobomba', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                    { id: 'ZONDA-2665-2', type: 'Autobomba Liviana', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'IV-9051-2', type: 'Hidroelevador', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            }
        ]
    },
    {
        id: 'unidades-especiales',
        name: 'UNIDADES ESPECIALES',
        stations: [
            {
                id: 'brigada-de-emergencias-especiales',
                name: 'BRIGADA DE EMERGENCIAS ESPECIALES',
                units: [
                    { id: 'C.JUMP-2152', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Day Vivas', lp: 'placeholder-lp-32' }, personnelCount: 1 },
                    { id: 'FR-2109', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro Sup.', name: 'Rivero', lp: 'placeholder-lp-33' }, personnelCount: 1 },
                    { id: 'C.JUMP. 1170', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Subtte', name: 'Ramirez', lp: 'placeholder-lp-34' }, personnelCount: 3 },
                ]
            },
            {
                id: 'destacamento-sistema-de-asistencia-critica',
                name: 'DESTACAMENTO SISTEMA DE ASISTENCIA CRITICA',
                units: [
                    { id: 'JUMPER-2149', type: 'Unidad Médica', status: UnitStatus.InService, officerInCharge: { rank: 'Subtte', name: 'Garcia', lp: 'placeholder-lp-35' }, personnelCount: 1 },
                    { id: 'F.R. 2114', type: 'Prensa', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Freire', lp: 'placeholder-lp-36' }, personnelCount: 2 },
                ]
            },
            {
                id: 'dto-ger-1-caballito',
                name: 'DTO. G.E.R. 1 CABALLITO',
                units: [
                    { id: 'IV-2644', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Ferreiro Vargas', lp: 'placeholder-lp-37' }, personnelCount: 5 },
                    { id: 'F.R 2111 C/D', type: 'Camioneta', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'F.R 2132 C/S', type: 'Camioneta', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'HI-FEI S/N°', type: 'Balsa Inflable', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'SEM. GALLO BIM', type: 'Semirrígido', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'MB-9157', type: 'Autobomba', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'BIM CORINA', type: 'Semirrígido', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'HIGHFIELD', type: 'Semirrígido', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'ALLIGHT-5', type: 'Iluminación', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'MARINER 4725', type: 'Motor S/Emb', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'JOHNSON 4479', type: 'Motor S/Emb', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'dto-ger-2-saavedra',
                name: 'DTO. G.E.R. 2 SAAVEDRA',
                units: [
                    { id: 'IV-9351', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Di Mango', lp: 'placeholder-lp-38' }, personnelCount: 8 },
                    { id: 'F. R.-2130', type: 'Camioneta', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'TOHATSU 4T', type: 'Embarcación', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'BIM S/N°-2', type: 'Semirrígido', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'HI-FEI S/N°-3', type: 'Balsa Inflable', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'ALLIGHT-6', type: 'Iluminación', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'estacion-busqueda-y-rescate-k9',
                name: 'ESTACIÓN BUSQUEDA Y RESCATE K9',
                units: [
                    { id: 'K9', type: 'Búsqueda y Rescate', status: UnitStatus.InService, officerInCharge: { rank: 'Capitan', name: 'Meaolo', lp: 'placeholder-lp-39' }, personnelCount: 2 },
                    { id: 'F.R.-8356', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Subtte.', name: 'Castelli', lp: 'placeholder-lp-40' }, personnelCount: 1 },
                    { id: 'K.D.H.', type: 'BERLINGO', status: UnitStatus.OnLoan, officerInCharge: null, personnelCount: null },
                ]
            },
            {
                id: 'transporte-forense',
                name: 'TRANSPORTE FORENSE',
                units: [
                    { id: 'OAI-718/2634 (F3)', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Sup', name: 'Avelino', lp: 'placeholder-lp-41' }, personnelCount: 2 },
                    { id: 'OAI-717/2633 (F2)', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Bro. Sup', name: 'Colarossi', lp: 'placeholder-lp-42' }, personnelCount: 2 },
                    { id: 'OAI-716/2632 (F1)', type: 'Camioneta', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'FHY-285-/1321 (F5)', type: 'Unidad Liviana', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'OSZ-875/930 (F8)', type: 'Camioneta', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'AA-639-AM / 1188 (CB)', type: 'Camioneta', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            },
        ]
    },
    {
        id: 'jefatura',
        name: 'JEFATURA',
        stations: [
            {
                id: 'ocob',
                name: 'O.C.O.B.',
                units: [
                    { id: 'IV-2646 P.C.M', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Muzzicato', lp: 'placeholder-lp-43' }, personnelCount: 2 },
                ]
            },
            {
                id: 'oficina-de-investigacion-de-incendios-y-explosiones',
                name: 'OFICINA DE INVESTIGACION DE INCENDIOS Y EXPLOSIONES',
                units: [
                    { id: 'FR-2139 (UPM)', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Subteniente', name: 'Brandan', lp: 'placeholder-lp-44' }, personnelCount: 3 },
                    { id: 'FR-2117', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Douat', lp: 'placeholder-lp-45' }, personnelCount: 1 },
                ]
            },
            {
                id: 'urip-centro',
                name: 'URIP CENTRO',
                units: [
                    { id: 'C.BER - 2104', type: 'Unidad Liviana', status: UnitStatus.InService, officerInCharge: { rank: 'Teniente', name: 'Rios', lp: 'placeholder-lp-46' }, personnelCount: 1 },
                ]
            },
            {
                id: 'urip-norte',
                name: 'URIP NORTE',
                units: [
                    { id: 'FR-2131', type: 'Camioneta', status: UnitStatus.InService, officerInCharge: { rank: 'Subteniente', name: 'Pistoia', lp: 'placeholder-lp-47' }, personnelCount: 1 },
                ]
            },
            {
                id: 'division-befer',
                name: 'DIVISIÓN B.E.FE.R.',
                units: [
                    { id: 'IV-2639-2', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Inspector', name: 'Di Mango', lp: 'placeholder-lp-48' }, personnelCount: 8 },
                    { id: 'MB-2652', type: 'Autobomba', status: UnitStatus.InService, officerInCharge: { rank: 'Subinspector', name: 'Arbe', lp: 'placeholder-lp-49' }, personnelCount: 7 },
                    { id: 'FORD-2655', type: 'Bote', status: UnitStatus.InService, officerInCharge: { rank: 'Ayudante', name: 'Tevez', lp: 'placeholder-lp-50' }, personnelCount: 3 },
                    { id: 'MERCURY 4660', type: 'Motor', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'HONDA 5184', type: 'Tornado', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'MERCURY 3102', type: 'Motor', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'ALLIGHT 4661', type: 'Iluminación', status: UnitStatus.Reserve, officerInCharge: null, personnelCount: null },
                    { id: 'PEUGEOT-361', type: 'Transporte', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'FORD-2664', type: 'Cisterna', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'IVECO 9360', type: 'Usina G.E.', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'FORD-2682', type: 'Ranger', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'FD-7796', type: 'Cuatriciclo', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'YAMAHA-3975', type: 'Ranger', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                    { id: 'F.R.-8356-2', type: 'Camioneta', status: UnitStatus.OutOfService, officerInCharge: null, personnelCount: null },
                ]
            }
        ]
    }
];