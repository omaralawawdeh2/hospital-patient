
import { useState } from "react";
import PatientForm from "./component/PatientForm";
import "./App.css";

function App() {

  const [patients, setPatients] = useState([]);

  // Add Patient
  const addPatient = (newPatient) => {
    setPatients(prevPatients => [
      ...prevPatients,
      newPatient
    ]);
  };

  // Delete Patient
  const deletePatient = (indexToDelete) => {
    setPatients(prevPatients =>
      prevPatients.filter((patient, index) =>
        index !== indexToDelete
      )
    );
  };

  return (
    <main className="hospital-app">

      <h1 className="hospital-title">
        Hospital Patient Manager
      </h1>

      <PatientForm onAddPatient={addPatient} />

      <section className="patients-card">

        <div className="patients-heading">
          <h2>Patients</h2>
          <p className="total-count">
            Total: {patients.length}
          </p>
        </div>

        {patients.length === 0 ? (

          <p className="empty-message">
            No patients yet.
          </p>

        ) : (

          <ul className="patients-list">

            {patients.map((patient, index) => (

              <li className="patient-row" key={index}>

                <strong className="patient-name">
                  {index + 1}. {patient.name}
                </strong>

                <span>Age: {patient.age}</span>

                <span>
                  Department: {patient.department}
                </span>

                <button
                  className="delete-button"
                  type="button"
                  onClick={() => deletePatient(index)}
                >
                  Delete
                </button>

              </li>

            ))}

          </ul>

        )}

      </section>

    </main>
  );
}

export default App;
