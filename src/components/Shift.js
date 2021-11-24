import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

import ReactDOM from "react-dom";

import "./Shift.css";

const Shift = (props) => {
  const [error, setError] = useState();
  const modalOff = () => {
    setError(null);
  };
  const modalOn = (date, clinic) => {
    setError({
      title: "Do you want to remove the following shift?",
      message: ["DATE: ", fullDate, <br />," CLINIC: ", clinic]
    });
  };

  

  const removeShiftHandler = () => {
    modalOn(props.date, props.clinic);
  };

  const confirmRemoval = () => {
    const shiftId = props.id;
    props.onRemove(shiftId);
  };

  const editShiftHandler = () => {
    const shiftToEdit = {
      id: props.id,
      date: props.date,
      clinic: props.clinic,
      startTime: props.startTime,
      endTime: props.endTime,
      recruitmentAgency: props.recruitmentAgency,
      isRecruterBookingFormSigned: props.isRecruterBookingFormSigned,
      isUmbrellaAssignmentSigned: props.isUmbrellaAssignmentSigned,
      shiftAmountAgreed: props.shiftAmountAgreed,
      isShiftWorked: props.isShiftWorked,
      isTimeSheetSubmittedToRecruiter: props.isTimeSheetSubmittedToRecruiter,
      isTimeSheetSubmittedToUmbrella: props.isTimeSheetSubmittedToUmbrella,
      isPaid: props.isPaid,
    };
    props.onEdit(shiftToEdit);
  };

  const formattedDate = new Date(props.date);
  const month = formattedDate.toLocaleString("en-US", { month: "long" });
  const day = formattedDate.toLocaleString("en-US", { day: "2-digit" });
  const year = formattedDate.getFullYear();
  const fullDate = day + "-" + month + "-" + year;

  return (
    <tr>
      <React.Fragment>
        {error &&
          ReactDOM.createPortal(
            <ConfirmationModal
              title={error.title}
              message={error.message}
              onConfirm={modalOff}
              confirmRemoval={confirmRemoval}
              key={props.id}
            />,
            document.getElementById("confirmationModal")
          )}
      </React.Fragment>
      <td className="highlightedTdonMobile">{fullDate}</td>
      <td className= "textTd">{props.clinic}</td>
      <td>{props.startTime}</td>
      <td>{props.endTime}</td>
      <td className= "textTd">{props.recruitmentAgency}</td>
      <td>{props.isRecruterBookingFormSigned}</td>
      <td>{props.isUmbrellaAssignmentSigned}</td>
      <td>£ {props.shiftAmountAgreed}</td>
      <td>{props.isShiftWorked}</td>
      <td>{props.isTimeSheetSubmittedToRecruiter}</td>
      <td>{props.isTimeSheetSubmittedToUmbrella}</td>
      <td>{props.isPaid}</td>
      <td className="noBorderTdOnMobile">
        <button onClick={editShiftHandler}>edit shift</button>
      </td>
      <td className="noBorderTdOnMobile">
        <button onClick={removeShiftHandler}>remove shift</button>
      </td>
    </tr>
  );
};

export default Shift;
