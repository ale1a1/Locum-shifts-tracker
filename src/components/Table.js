import React from "react";

import Shift from "./Shift";

import "./Table.css";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="highligthedTh">DATE</th>
          <th className="textTh">CLINIC</th>
          <th>START TIME</th>
          <th>END TIME</th>
          <th className="textTh">AGENCY</th>
          <th>AGENCY BOOKING</th>
          <th>UMBRELLA ASSIGNMENT</th>
          <th>AMOUNT AGREED</th>
          <th>WORKED</th>
          <th>AGENCY TIMESHEET</th>
          <th>UMBRELLA TIMESHEET</th>
          <th>PAID</th>
        </tr>
      </thead>
      <tbody>
        {props.shifts.map((shift) => (
          <Shift
            key={shift.id}
            id={shift.id}
            clinic={shift.clinic}
            date={shift.date}
            amount={shift.amount}
            startTime={shift.startTime}
            endTime={shift.endTime}
            recruitmentAgency={shift.recruitmentAgency}
            isRecruterBookingFormSigned={shift.isRecruterBookingFormSigned}
            isUmbrellaAssignmentSigned={shift.isUmbrellaAssignmentSigned}
            shiftAmountAgreed={shift.shiftAmountAgreed}
            isShiftWorked={shift.isShiftWorked}
            isTimeSheetSubmittedToRecruiter={
              shift.isTimeSheetSubmittedToRecruiter
            }
            isTimeSheetSubmittedToUmbrella={
              shift.isTimeSheetSubmittedToUmbrella
            }
            isPaid={shift.isPaid}
            onRemove={props.onRemove}
            onEdit={props.openShiftEditer}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
