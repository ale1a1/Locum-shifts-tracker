import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

import "./ShiftForm.css";

const ShiftForm = (props) => {
  const blankShiftData = {
    id: "",
    date: "",
    clinic: "",
    startTime: "",
    endTime: "",
    recruitmentAgency: "",
    isRecruterBookingFormSigned: "",
    isUmbrellaAssignmentSigned: "",
    shiftAmountAgreed: "",
    isShiftWorked: "",
    isTimeSheetSubmittedToRecruiter: "",
    isTimeSheetSubmittedToUmbrella: "",
    isPaid: "",
  };

  const [enteredShiftData, setEnteredShiftData] = useState(
    props.shiftToEditData
  );

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const [dateClass, setDateClass] = useState();
  const [clinicClass, setClinicClass] = useState();
  const [startClass, setStartClass] = useState();
  const [endClass, setEndClass] = useState();
  const [agClass, setAgClass] = useState();
  const [agBookClass, setAgBookClass] = useState();
  const [umbClass, setUmbClass] = useState();
  const [shiftAmClass, setShiftAmClass] = useState();
  const [isShiftWClass, setIsShiftWClass] = useState();
  const [timesheetRClass, setTimesheetRClass] = useState();
  const [timesheetUClass, setTimesheetUClass] = useState();
  const [isPaidClass, setIsPaidClass] = useState();

  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setDateClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        date: event.target.value,
      };
    });
  };

  const clinicChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setClinicClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        clinic: event.target.value,
      };
    });
  };

  const startTimeChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setStartClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        startTime: event.target.value,
      };
    });
  };

  const endTimeChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setEndClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        endTime: event.target.value,
      };
    });
  };

  const recruitmentAgencyChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAgClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        recruitmentAgency: event.target.value,
      };
    });
  };

  const isRecruterBookingFormSignedChangeHandler = (event) => {
    if (event.target.value.trim().length !== "-----") {
      setAgBookClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        isRecruterBookingFormSigned: event.target.value,
      };
    });
  };

  const isUmbrellaAssignmentSignedChangeHandler = (event) => {
    if (event.target.value.trim().length !== "-----") {
      setUmbClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        isUmbrellaAssignmentSigned: event.target.value,
      };
    });
  };

  const shiftAmountAgreedChangeHandler = (event) => {
    if (event.target.value.trim().length !== "-----") {
      setShiftAmClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        shiftAmountAgreed: event.target.value,
      };
    });
  };

  const isShiftWorkedChangeHandler = (event) => {
    if (event.target.value.trim().length !== "-----") {
      setIsShiftWClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        isShiftWorked: event.target.value,
      };
    });
  };

  const isTimeSheetSubmittedToRecruiterChangeHandler = (event) => {
    if (event.target.value.trim().length !== "-----") {
      setTimesheetRClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        isTimeSheetSubmittedToRecruiter: event.target.value,
      };
    });
  };

  const isTimeSheetSubmittedToUmbrellaChangeHandler = (event) => {
    if (event.target.value.trim().length !== "-----") {
      setTimesheetUClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        isTimeSheetSubmittedToUmbrella: event.target.value,
      };
    });
  };

  const isPaidChangeHandler = (event) => {
    if (event.target.value.trim().length !== "-----") {
      setIsPaidClass();
    }
    setEnteredShiftData((previousShiftData) => {
      return {
        ...previousShiftData,
        isPaid: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredShiftData.date.trim().length === 0) {
      setDateClass("input-error");
    }
    if (enteredShiftData.clinic.trim().length === 0) {
      setClinicClass("input-error");
    }
    if (enteredShiftData.startTime.trim().length === 0) {
      setStartClass("input-error");
    }
    if (enteredShiftData.endTime.trim().length === 0) {
      setEndClass("input-error");
    }
    if (enteredShiftData.recruitmentAgency.trim().length === 0) {
      setAgClass("input-error");
    }
    if (
      enteredShiftData.isRecruterBookingFormSigned.trim().length === 0 ||
      enteredShiftData.isRecruterBookingFormSigned === "-----"
    ) {
      setAgBookClass("input-error");
    }
    if (
      enteredShiftData.isUmbrellaAssignmentSigned.trim().length === 0 ||
      enteredShiftData.isUmbrellaAssignmentSigned === "-----"
    ) {
      setUmbClass("input-error");
    }
    if (enteredShiftData.shiftAmountAgreed.trim().length === 0) {
      setShiftAmClass("input-error");
    }
    if (
      enteredShiftData.isShiftWorked.trim().length === 0 ||
      enteredShiftData.isShiftWorked === "-----"
    ) {
      setIsShiftWClass("input-error");
    }
    if (
      enteredShiftData.isTimeSheetSubmittedToRecruiter.trim().length === 0 ||
      enteredShiftData.isTimeSheetSubmittedToRecruiter === "-----"
    ) {
      setTimesheetRClass("input-error");
    }
    if (
      enteredShiftData.isTimeSheetSubmittedToUmbrella.trim().length === 0 ||
      enteredShiftData.isTimeSheetSubmittedToUmbrella === "-----"
    ) {
      setTimesheetUClass("input-error");
    }

    if (
      enteredShiftData.isPaid.trim().length === 0 ||
      enteredShiftData.isPaid === "-----"
    ) {
      setIsPaidClass("input-error");
    }

    if (
      enteredShiftData.date.trim().length === 0 ||
      enteredShiftData.clinic.trim().length === 0 ||
      enteredShiftData.startTime.trim().length === 0 ||
      enteredShiftData.endTime.trim().length === 0 ||
      enteredShiftData.recruitmentAgency.trim().length === 0 ||
      enteredShiftData.isRecruterBookingFormSigned.trim().length === 0 ||
      enteredShiftData.isRecruterBookingFormSigned === "-----" ||
      enteredShiftData.isUmbrellaAssignmentSigned.trim().length === 0 ||
      enteredShiftData.isUmbrellaAssignmentSigned === "-----" ||
      enteredShiftData.shiftAmountAgreed.trim().length === 0 ||
      enteredShiftData.isShiftWorked.trim().length === 0 ||
      enteredShiftData.isShiftWorked === "-----" ||
      enteredShiftData.isTimeSheetSubmittedToRecruiter.trim().length === 0 ||
      enteredShiftData.isTimeSheetSubmittedToRecruiter === "-----" ||
      enteredShiftData.isTimeSheetSubmittedToUmbrella.trim().length === 0 ||
      enteredShiftData.isTimeSheetSubmittedToUmbrella === "-----" ||
      enteredShiftData.isPaid.trim().length === 0 ||
      enteredShiftData.isPaid === "-----"
    ) {
      setError({
        title: "Essential details missing",
        message: "All the fields must be completed in order to save the shift",
      });
      return;
    }
    props.onSaveShiftData(enteredShiftData);
    setEnteredShiftData(blankShiftData);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form onSubmit={submitHandler}>
        <div className="controls">
          <div className="control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredShiftData.date}
              onChange={dateChangeHandler}
              className={dateClass}
            />
          </div>
          <div className="control">
            <label>Clinic</label>
            <input
              type="text"
              value={enteredShiftData.clinic}
              maxLength="50"
              onChange={clinicChangeHandler}
              className={clinicClass}
            />
          </div>
          <div className="control">
            <label>Start time</label>
            <input
              type="time"
              value={enteredShiftData.startTime}
              onChange={startTimeChangeHandler}
              className={startClass}
            />
          </div>
          <div className="control">
            <label>End time</label>
            <input
              type="time"
              value={enteredShiftData.endTime}
              onChange={endTimeChangeHandler}
              className={endClass}
            />
          </div>
          <div className="control">
            <label>Recruitment agency</label>
            <input
              type="text"
              maxLength="30"
              value={enteredShiftData.recruitmentAgency}
              onChange={recruitmentAgencyChangeHandler}
              className={agClass}
            />
          </div>
          <div className="control">
            <label>Amount agreed</label>
            <input
              type="number"
              min="100"
              step="5"
              value={enteredShiftData.shiftAmountAgreed}
              onChange={shiftAmountAgreedChangeHandler}
              className={shiftAmClass}
            />
          </div>
          <div className="control">
            <label>Is Umbrella Company Assignment Submitted?</label>
            <select
              onChange={isUmbrellaAssignmentSignedChangeHandler}
              value={enteredShiftData.isUmbrellaAssignmentSigned}
              className={umbClass}
            >
              <option value="-----">-----</option>
              <option value="NO">NO</option>
              <option value="YES">YES</option>
            </select>
          </div>
          <div className="control">
            <label>Is Agency Booking Form signed?</label>
            <select
              onChange={isRecruterBookingFormSignedChangeHandler}
              value={enteredShiftData.isRecruterBookingFormSigned}
              className={agBookClass}
            >
              <option value="-----">-----</option>
              <option value="NO">NO</option>
              <option value="YES">YES</option>
            </select>
          </div>

          <div className="control">
            <label>Is shift worked?</label>
            <select
              onChange={isShiftWorkedChangeHandler}
              value={enteredShiftData.isShiftWorked}
              className={isShiftWClass}
            >
              <option value="-----">-----</option>
              <option value="NO">NO</option>
              <option value="YES">YES</option>
            </select>
          </div>
          <div className="control">
            <label>Is Agency time sheet Submitted?</label>
            <select
              onChange={isTimeSheetSubmittedToRecruiterChangeHandler}
              value={enteredShiftData.isTimeSheetSubmittedToRecruiter}
              className={timesheetRClass}
            >
              {" "}
              <option value="-----">-----</option>
              <option value="NO">NO</option>
              <option value="YES">YES</option>
            </select>
          </div>
          <div className="control">
            <label>Is Umbrella Company time sheet Submitted?</label>
            <select
              onChange={isTimeSheetSubmittedToUmbrellaChangeHandler}
              value={enteredShiftData.isTimeSheetSubmittedToUmbrella}
              className={timesheetUClass}
            >
              <option value="-----">-----</option>
              <option value="NO">NO</option>
              <option value="YES">YES</option>
            </select>
          </div>
          <div className="control">
            <label>Is shift paid?</label>
            <select
              onChange={isPaidChangeHandler}
              value={enteredShiftData.isPaid}
              className={isPaidClass}
            >
              <option value="-----">-----</option>
              <option value="NO">NO</option>
              <option value="YES">YES</option>
            </select>
          </div>
        </div>
        <div className="actions">
          <button className="bottone" type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className="bottone" type="submit">
            {props.buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShiftForm;
