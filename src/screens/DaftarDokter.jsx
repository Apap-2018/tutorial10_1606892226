import React from 'react';
import { DaftarDokterRow } from '../components/DaftarDokterRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarDokter extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listPasien: []
		}
		Appointment.getAllDokter().then(response=> {
			this.setState({
				loading:false,
				listPasien:response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Dokter" header={['Nama Dokter', 'Aksi']}>
                    <DaftarDokterRow listDokter={this.state.listPasien}/>
                </TableContainer>
            )
        }
	}
}