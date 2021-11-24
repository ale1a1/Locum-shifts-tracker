import react from "react";
// import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
// import "./DateRangePickerComponent.css";
import "./Filters.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const localStorageArray = localStorage.getItem("storedShiftsArray");

class ShiftFilter extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      clinic: "",
      recruitmentAgency: "",
      //modifiche di martedi 16...
      // startDate: new Date("2019-01-01").getTime(),
      // endDate: new Date("2022-12-31").getTime(),
      startDate: new Date(this.props.startDate),
      endDate: new Date(this.props.endDate),
    };
    this.clinicInputChangeHandler = this.clinicInputChangeHandler.bind(this);
    this.recrutmentAgencyInputChangeHandler =
      this.recrutmentAgencyInputChangeHandler.bind(this);
    // this.dateRangeHandler = this.dateRangeHandler.bind(this);
    this.dateRangeHandler2 = this.dateRangeHandler2.bind(this);
    this.dateRangeHandler3 = this.dateRangeHandler3.bind(this);
  }

  clinicInputChangeHandler = (event) => {
    this.setState({ clinic: event.target.value });
    this.props.onFilter({ ...this.state, clinic: event.target.value });
  };

  recrutmentAgencyInputChangeHandler = (event) => {
    this.setState({ recruitmentAgency: event.target.value });
    this.props.onFilter({
      ...this.state,
      recruitmentAgency: event.target.value,
    });
  };

  // dateRangeHandler = (event) => {
  //   const startDate = event.target.startDate;
  //   const endDate = event.target.endDate;
  //   let startDateMillisec = "";
  //   let endDateMillisec = "";
  //   if (startDate && endDate) {
  //     startDateMillisec = startDate.getTime();
  //     endDateMillisec = endDate.getTime();
  //   } else {
  //     startDateMillisec = new Date("2019-01-01").getTime();
  //     endDateMillisec = new Date("2022-12-31").getTime();
  //   }
  //   this.setState({
  //     startDate: startDateMillisec,
  //     endDate: endDateMillisec,
  //   });
  //   this.props.onFilter({
  //     ...this.state,
  //     startDate: startDateMillisec,
  //     endDate: endDateMillisec,
  //   });
  // };

  dateRangeHandler2 = (event) => {
    const startDateInMillisec = new Date(event).getTime();
    this.setState({
      startDate: startDateInMillisec,
      // startDate: new Date(event),
    });
    this.props.onFilter({
      ...this.state,
      startDate: startDateInMillisec,
    });
  };

  dateRangeHandler3 = (event) => {
    const endDateInMillisec = new Date(event).getTime();
    this.setState({
      endDate: endDateInMillisec,
      // endDate: new Date(event),
    });
    this.props.onFilter({
      ...this.state,
      endDate: endDateInMillisec,
    });
    // console.log(localStorageArray);
  };

  render() {
    return (
      <div className="filters">
        <div className="filter" id="iphone6Plus">
          <label className="label">Search by clinic</label>
          <input type="text" onChange={this.clinicInputChangeHandler} />
        </div>
        <div className="filter">
          <label className="label">Search by recruitment agency</label>
          <input
            type="text"
            onChange={this.recrutmentAgencyInputChangeHandler}
          />
        </div>
        {/* <DateRangePickerComponent
          cssClass="customCSS"
          placeholder="Search by date range"
          allowEdit="false"
          onChange={this.dateRangeHandler}
        />  */}
        <div className="calendars">
          <div className="datePickerlabel">from</div>
          <DatePicker
            className="datePicker"
            placeholderText="Select Start Date"
            selected={this.state.startDate}
            dateFormat="MMMM d, yyyy"
            maxDate={this.state.endDate}
            onChange={this.dateRangeHandler2}
            selectsStart
            startDate={this.state.startDate}
          />
          <div className="datePickerlabel">to</div>
          <DatePicker
            className="datePicker"
            placeholderText="Select End Date"
            selected={this.state.endDate}
            dateFormat="MMMM d, yyyy"
            startDate={this.startDate}
            endDate={this.state.endDate}
            minDate={this.state.startDate}
            onChange={this.dateRangeHandler3}
          />
        </div>
      </div>
    );
  }
}

// const Filters = (props) => {
//   // const filtersObject = {
//   //   clinic: "",
//   //   recruitmentAgency: "",
//   // };
//   // const [enteredInputValue, setenteredInputValue] = useState(filtersObject);
//   //lo devo rimettere per il value degli inputs o lo mozzo???

//   props.filter = { clinic: "", recruitmentAgency: "" };

//   const clinicInputChangeHandler = (event) => {
//     // setenteredInputValue((prevState) => {
//     //   return {
//     //     ...prevState,
//     //     clinic: event.target.value,
//     //   };
//     // });

//
//

//     // props.onFilter({ clinic: event.target.value, recruitmentAgency: "" });
//   };

//   const recrutmentAgencyInputChangeHandler = (event) => {
//     // setenteredInputValue((prevState) => {
//     //   return {
//     //     ...prevState,
//     //     recruitmentAgency: event.target.value,
//     //   };
//     // });

//
//
//     // props.onFilter({ clinic: "", recruitmentAgency: event.target.value });
//   };

//   return (
//     <div className="filter">
//       <div className="?">
//         <label>Search by clinic</label>
//         <input
//           type="text"
//           // value=

//           onChange={clinicInputChangeHandler}
//           className="???"
//         />
//       </div>
//       <div className="?">
//         <label>Search by recruitment agency</label>
//         <input
//           type="text"
//           // value=
//           onChange={recrutmentAgencyInputChangeHandler}
//           className="???"
//         />
//       </div>
//       <DateRangePicker onFilterByDateRange={props.onFilterByDateRange} />
//     </div>
//   );
// };

export default ShiftFilter;
