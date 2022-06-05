import React, { useState, useEffect } from "react";
import ShiftsList from "./components/ShiftsList";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";

const shiftsArray = [];

// const shiftsArray = [
//     {
//       id: "0.19406310858418152",
//       date: "2021-11-09",
//       clinic: "Fluffy friends Vets (Wigan)",
//       startTime: "09:00",
//       endTime: "18:30",
//       recruitmentAgency: "Super Vets",
//       isRecruterBookingFormSigned: "NO",
//       isUmbrellaAssignmentSigned: "NO",
//       shiftAmountAgreed: "235",
//       isShiftWorked: "NO",
//       isTimeSheetSubmittedToRecruiter: "NO",
//       isTimeSheetSubmittedToUmbrella: "NO",
//       isPaid: "NO",
//     },
//     {
//       id: "0.5616096219596118",
//       date: "2021-11-08",
//       clinic: "Dogs clinic (Liverpool)",
//       startTime: "14:15",
//       endTime: "19:00",
//       recruitmentAgency: "Vet friends",
//       isRecruterBookingFormSigned: "YES",
//       isUmbrellaAssignmentSigned: "YES",
//       shiftAmountAgreed: "200",
//       isShiftWorked: "YES",
//       isTimeSheetSubmittedToRecruiter: "NO",
//       isTimeSheetSubmittedToUmbrella: "YES",
//       isPaid: "NO",
//     },
//     {
//       id: "0.5782649594736187",
//       date: "2021-11-02",
//       clinic: "Cats clinic (Chester)",
//       startTime: "09:00",
//       endTime: "14:00",
//       recruitmentAgency: "Best Vets ",
//       isRecruterBookingFormSigned: "YES",
//       isUmbrellaAssignmentSigned: "YES",
//       shiftAmountAgreed: "240",
//       isShiftWorked: "YES",
//       isTimeSheetSubmittedToRecruiter: "YES",
//       isTimeSheetSubmittedToUmbrella: "YES",
//       isPaid: "YES",
//     }
// ].sort((a, b) => {
//   return new Date(b.date).getTime() - new Date(a.date).getTime();
// });

if (!JSON.parse(localStorage.getItem("storedShiftsArray"))) {
  localStorage.setItem("storedShiftsArray", JSON.stringify(shiftsArray));
}

const App = () => {
  const clonedStorage = JSON.parse(localStorage.getItem("storedShiftsArray"));

  const sortedClonedStorage = clonedStorage.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const [shifts, setShifts] = useState(sortedClonedStorage);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const addShiftHandler = (shift) => {
    const storedShiftsArray = JSON.parse(
      localStorage.getItem("storedShiftsArray")
    );
    storedShiftsArray.push(shift);
    const sortedStoredShiftArray = storedShiftsArray.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    localStorage.setItem(
      "storedShiftsArray",
      JSON.stringify(sortedStoredShiftArray)
    );
    setShifts(JSON.parse(localStorage.getItem("storedShiftsArray")));
  };

  const shiftRemover = (shiftToRemoveId) => {
    const storedShiftsBeforeRemove = JSON.parse(
      localStorage.getItem("storedShiftsArray")
    );
    const filteredStoredShifts = storedShiftsBeforeRemove.filter(
      (shift) => shift.id !== shiftToRemoveId
    );
    localStorage.setItem(
      "storedShiftsArray",
      JSON.stringify(filteredStoredShifts)
    );
    setShifts(JSON.parse(localStorage.getItem("storedShiftsArray")));
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // const filter = (filterInput) => {
  //   console.log(filterInput);
  //   const storedShifts = JSON.parse(localStorage.getItem("storedShiftsArray"));
  //   let filteredArray = [];
  //   const startWithConditions =
  //     filterInput.recruitmentAgency || filterInput.clinic;
  //   const dateRangeConditions = filterInput.startDate || filterInput.endDate;
  //   if (startWithConditions || dateRangeConditions) {
  //     filteredArray = storedShifts.filter((shift) => {
  //       const shiftDateInMillisec = new Date(shift.date).getTime();
  //       shift.shiftDateInMillisec = shiftDateInMillisec;
  //       const filterByInitialsConditions =
  //         shift.recruitmentAgency.toLowerCase().startsWith(filterInput.recruitmentAgency.toLowerCase()) &&
  //         shift.clinic.toLowerCase().startsWith(filterInput.clinic.toLowerCase());
  //       const filterByDateRangeConditions =
  //         shift.shiftDateInMillisec >= filterInput.startDate &&
  //         shift.shiftDateInMillisec <= filterInput.endDate;
  //         console.log(new Date(shift.shiftDateInMillisec))
  //         console.log(new Date(filterInput.startDate))
  //       return filterByDateRangeConditions && filterByInitialsConditions;
  //     });
  //     setShifts(
  //       filteredArray.sort((a, b) => {
  //         return new Date(b.date).getTime() - new Date(a.date).getTime();
  //       })
  //     );
  //   } else {
  //     setShifts(
  //       storedShifts.sort((a, b) => {
  //         return new Date(b.date).getTime() - new Date(a.date).getTime();
  //       })
  //     );
  //   }
  // };

  const filter = (filterInput) => {
    // console.log(filterInput);
    const storedShifts = JSON.parse(localStorage.getItem("storedShiftsArray"));
    let filteredArray = [];
    const startWithConditions =
      filterInput.recruitmentAgency || filterInput.clinic;
    const dateRangeConditions = filterInput.startDate || filterInput.endDate;
    if (startWithConditions || dateRangeConditions) {
      filteredArray = storedShifts.filter((shift) => {
        const shiftDateInMillisec = new Date(shift.date).getTime();
        shift.shiftDateInMillisec = shiftDateInMillisec;
        const filterByInitialsConditions =
          shift.recruitmentAgency
            .toLowerCase()
            .startsWith(filterInput.recruitmentAgency.toLowerCase()) &&
          shift.clinic
            .toLowerCase()
            .startsWith(filterInput.clinic.toLowerCase());
        const startDate = new Date(filterInput.startDate);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(filterInput.endDate);
        endDate.setHours(0, 0, 0, 0);
        const filterByDateRangeConditions =
          shift.shiftDateInMillisec >= startDate &&
          shift.shiftDateInMillisec <= endDate;
        // console.log(new Date(shift.shiftDateInMillisec))
        // console.log(new Date(filterInput.startDate))
        return filterByDateRangeConditions && filterByInitialsConditions;
      });
      setShifts(
        filteredArray.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      );
    } else {
      setShifts(
        storedShifts.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
      );
    }
  };

  return (
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <div>
            {/* <Filters onFilter={filter} /> */}
            <ShiftsList
              onRemove={shiftRemover}
              onAddShift={addShiftHandler}
              onFilter={filter}
              shifts={shifts}
              onLogout={logoutHandler}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
