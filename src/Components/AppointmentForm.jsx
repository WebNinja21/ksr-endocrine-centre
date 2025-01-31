import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [address, setAddress] = useState("");
	const [date, setDate] = useState("");
	const [timeSlot, setTimeSlot] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addAppointment({ name, age, address, date, timeSlot });
		setName("");
		setAge("");
		setAddress("");
		setDate("");
		setTimeSlot("");
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-25">
						<label htmlFor="fname">Full Name</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="fname"
							placeholder="Your name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="age">Age</label>
					</div>
					<div className="col-75">
						<input
							type="number"
							id="age"
							placeholder="Your age.."
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="address">Address</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="address"
							placeholder="Your address.."
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="date">Appointment Date and Time Slot</label>
					</div>
					<div className="col-75">
						<input
							type="datetime-local"
							id="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;
