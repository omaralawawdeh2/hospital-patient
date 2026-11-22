
import { useState } from "react";
import "./css/PatientForm.css";

function PatientForm({ onAddPatient }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        const newPatient = {
            name,
            age,
            department
        };

        onAddPatient(newPatient);

        setName("");
        setAge("");
        setDepartment("");
    };

    return (
        <div className="form-card">

            <form
                className="patient-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    placeholder="Patient Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />

                <button
                    className="add-button"
                    type="submit"
                >
                    Add Patient
                </button>

            </form>

        </div>
    );
}

export default PatientForm;
