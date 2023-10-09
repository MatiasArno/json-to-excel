import excel from 'excel4node';
import getJsonData from './database/data.js';

(async function main() {
	let headingColumnIndex = 1;
    let rowIndex = 2;

    // Get the raw data in JSON format from data.js module and set the column names
    const rawData = await getJsonData();
    const columnNames = ['name', 'email', 'company', 'cellphone', 'interests', 'channels'];

    const SHEET_NAME = 'clients';
    
	const wb = new excel.Workbook();
	const ws = wb.addWorksheet('clients');

    // Set the name of each sheet column according to columnNames
	columnNames.forEach((heading) => {
		ws.cell(1, headingColumnIndex++).string(heading);
	});


	rawData.forEach((record) => {
		let columnIndex = 1;
        
		Object.keys(record).forEach((columnName) => {
			ws.cell(rowIndex, columnIndex++).string(record[columnName]);
		});

		rowIndex++;
	});

    // Set the name
    wb.write(`${SHEET_NAME}.xlsx`);
})();
