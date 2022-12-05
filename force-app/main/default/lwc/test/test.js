import { LightningElement, track } from 'lwc';



const columns = [
    { label: 'Name', fieldName: 'name', editable: true, type: 'text' },
    { label: 'Index', fieldName: 'index', editable: true, type: 'number' },
    { label: 'END', fieldName: 'END', editable: true, type: 'number' },
    { label: 'ED', fieldName: 'ED', editable: true, type: 'number' },
];



export default class Datatable_test extends LightningElement {
    data = [];
    columns = columns;
    rowOffset = 0;
    @track draftValues = [];

    connectedCallback() {
        this.data = this.generateData({ amountOfRecords: 100 });
    }

    generateData({ amountOfRecords }) {
        return [...Array(amountOfRecords)].map((_, index) => {
            return {
                name: `Name (${index})`,
                index: index,
                ED: 0,
                END: 0
            };
        });
    }

    handleCellChange(event) {
        const cell = event.detail.draftValues[0];
        console.log('cell ', cell);
        const row = this.data.find(rel => {
            return rel.tableId == cell.tableId
        });
        if (cell.END != undefined) {
            const END = cell.END.toUpperCase();
            if (row.END != END) {
                //row[FIELDS.AAPP_OLD] = row.original_AAPP;
                row.END = END;
            }
        }
    }
}