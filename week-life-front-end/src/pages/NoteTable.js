import React from 'react';
import MaterialTable from 'material-table';
import '../App.css'
import { NavBar } from '../components/NavBar';

export const NoteTable = () => {
    const columns = [
        {
            title: 'ID',
            field: 'id'
        },
        {
            title: 'Note',
            field: 'note'
        },
        {
            title: 'Fecha',
            field: 'fecha'
        }
    ];

    const data = [
        {
            id: '1',
            note: 'The DataGrid component is designed for use-cases that are focused around handling a large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features.',
            fecha: '18-05-2021'
        },
        {
            id: '2',
            note: 'Un checkbox debe acompañar a cada fila por si el usuario necesita seleccionar o manipular datos.',
            fecha: '19-05-2021'
        },
        {
            id: '3',
            note: 'The DataGrid component is designed for use-cases that are focused around handling a large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features.',
            fecha: '20-05-2021'
        },
        {
            id: '4',
            note: 'Un checkbox debe acompañar a cada fila por si el usuario necesita seleccionar o manipular datos.',
            fecha: '21-05-2021'
        },
        {
            id: '5',
            note: 'The DataGrid component is designed for use-cases that are focused around handling a large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features.',
            fecha: '22-05-2021'
        },
        {
            id: '6',
            note: 'Un checkbox debe acompañar a cada fila por si el usuario necesita seleccionar o manipular datos.',
            fecha: '23-05-2021'
        },
        {
            id: '7',
            note: 'The DataGrid component is designed for use-cases that are focused around handling a large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features.',
            fecha: '24-05-2021'
        },
        {
            id: '8',
            note: 'Un checkbox debe acompañar a cada fila por si el usuario necesita seleccionar o manipular datos.',
            fecha: '25-05-2021'
        },
        {
            id: '9',
            note: 'The DataGrid component is designed for use-cases that are focused around handling a large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features.',
            fecha: '26-05-2021'
        },
        {
            id: '10',
            note: 'Un checkbox debe acompañar a cada fila por si el usuario necesita seleccionar o manipular datos.',
            fecha: '27-05-2021'
        },
        {
            id: '11',
            note: 'The DataGrid component is designed for use-cases that are focused around handling a large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features.',
            fecha: '28-05-2021'
        },
        {
            id: '12',
            note: 'Un checkbox debe acompañar a cada fila por si el usuario necesita seleccionar o manipular datos.',
            fecha: '29-05-2021'
        },
    ]
    return (
        <div className="App-header">
            <NavBar />
            <MaterialTable
                columns={columns}
                data={data}
                title='Notes'
                actions={[
                    {
                        icon:'edit',
                        tooltip: 'edit note',
                        onClick: (e, rowData) => alert('You have pressed edit note')
                    }]} />
                   
        </div>
    )
}
