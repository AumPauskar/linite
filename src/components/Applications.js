import React from 'react';
// import { Table, TableBody, TableCell, TableRow } from '@mui/material/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function Application() {
	return (
		<Table>
			<TableBody>
				<TableRow>
					<TableCell>Cell 1</TableCell>
					<TableCell>Cell 2</TableCell>
					<TableCell>Cell 3</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Cell 4</TableCell>
					<TableCell>Cell 5</TableCell>
					<TableCell>Cell 6</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Cell 7</TableCell>
					<TableCell>Cell 8</TableCell>
					<TableCell>Cell 9</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}

export default Application;