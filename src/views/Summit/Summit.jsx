import React from 'react';

import Navbar from '../../components/Navbar/NavbarContainer';

export default class Summit extends React.Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>

				<div
					style={{
						width: '60vw',
						textAlign: 'center',
						margin: 'auto',
						backgroundColor: '#0275d8 ',
						padding: '10px',
						borderRadius: '5px',
						marginTop: '35vh',
					}}
				>
					<a
						style={{
							color: 'white',
							fontSize: '2em',
						}}
						href="https://docs.google.com/forms/d/e/1FAIpQLSew-PQwoJfezFq9CL5JSC8voXkLmZ_4MYXHP1bN3ckiDVNbbA/viewform"
						target="_blank"
					>
						Register
					</a>
				</div>
			</div>
		);
	}
}
