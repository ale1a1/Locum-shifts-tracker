import React, { useState } from "react";

import ShiftForm from "./ShiftForm";
import Table from "./Table";
import "./ShiftsList.css";
import ShiftFilter from "./Filters";

const ShiftsList = (props) => {
  const [isEditing, setIsEditing] = useState("ADD BUTTON");
  const shiftData = {
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
  const [
    shiftDataFromNewShiftToShiftForm,
    setShiftDataFromNewShiftToShiftForm,
  ] = useState(shiftData);

  const [formButtonText, setFormButtonText] = useState("Add shift");

  const saveShiftDataHandler = (enteredShiftData) => {
    const shiftData = {
      ...enteredShiftData,
      id: Math.random().toString(),
    };
    props.onAddShift(shiftData);
    setIsEditing("ADD BUTTON");
  };

  const openShiftEditer = (shiftToEdit) => {
    setIsEditing("EDIT FORM");
    setShiftDataFromNewShiftToShiftForm(shiftToEdit);
    setFormButtonText("Save");
  };

  const closeShiftEditer = (enteredShiftData) => {
    setIsEditing("ADD BUTTON");
    props.onRemove(shiftDataFromNewShiftToShiftForm.id);
    props.onAddShift(enteredShiftData);
    setShiftDataFromNewShiftToShiftForm(shiftData);
    setFormButtonText("Add shift");
  };

  const startEditingHandler = () => {
    setIsEditing("ADD FORM");
  };

  const stopEditingHandler = () => {
    setIsEditing("ADD BUTTON");
    setFormButtonText("Add shift");
  };

  // const getStartDate = (array) => {
  //   let startDate = "";
  //   if (array.lenght > 1) {
  //     startDate = array[array.length - 1].date;
  //   } else {
  //     startDate = "";
  //   }
  //   return startDate;
  // };

  // const getEndDate = (array) => {
  //   let endDate = "";
  //   if (array.lenght > 1) {
  //     endDate = array[0].date;
  //   } else {
  //     endDate = "";
  //   }
  //   return endDate;
  // };

  const endDate = props.shifts.length > 0 ? props.shifts[0].date : new Date();
  const startDate =
    props.shifts.length > 0
      ? props.shifts[props.shifts.length - 1].date
      : new Date();

  const JSX = () => {
    if (isEditing === "ADD BUTTON" && props.shifts.length === 0) {
      return (
        <div>
          <div className="add-new-shift">
            <button onClick={startEditingHandler}>Add New Shift</button>
          </div>
          <ShiftFilter
            onFilter={props.onFilter}
            startDate={startDate}
            endDate={endDate}
            // startDate={getStartDate(props.shifts)}
            // endDate={getEndDate(props.shifts)}
          />
          <h2 className="shifts-list__fallback">NO SHIFTS FOUND !</h2>
        </div>
      );
    } else if (isEditing === "ADD FORM") {
      return (
        <div className="new-shift">
          <ShiftForm
            onSaveShiftData={saveShiftDataHandler}
            onCancel={stopEditingHandler}
            shiftToEditData={shiftData}
            buttonText={formButtonText}
          />
        </div>
      );
    } else if (isEditing === "EDIT FORM") {
      return (
        <div className="new-shift">
          <ShiftForm
            onSaveShiftData={closeShiftEditer}
            onCancel={stopEditingHandler}
            shiftToEditData={shiftDataFromNewShiftToShiftForm}
            buttonText={formButtonText}
          />
        </div>
      );
    } else {
      return (
        <div>
          <div className="add-new-shift">
            <button onClick={startEditingHandler}>Add New Shift</button>
          </div>
          <ShiftFilter
            onFilter={props.onFilter}
            startDate={startDate}
            endDate={endDate}
            // startDate={getStartDate(props.shifts)}
            // endDate={getEndDate(props.shifts)}
          />
          <Table
            openShiftEditer={openShiftEditer}
            shifts={props.shifts}
            onRemove={props.onRemove}
          />
        </div>
      );
    }
  };

  return <div>{JSX()}</div>;
};

export default ShiftsList;
