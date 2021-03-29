import React from "react";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IOSSwitch from "../components/IOSSwitch";
import userIcon from "../assets/user@2x.png";

export const bankOptions = [
  { value: "schools", label: "Schools" },
  { value: "cinemas", label: "Cinemas" },
  { value: "bus tickets", label: "Bus" },
  { value: "shops", label: "Shops" },
  { value: "events", label: "Events" },
];

export const paymentOptions = [
  { value: "Direct", label: "Direct" },
  { value: "Cash", label: "Cash" },
  { value: "Manual", label: "Manual" },
];

export const branchOptions = [
  { value: "Grade1", label: "Grade1" },
  { value: "Grade2", label: "Grade2" },
  { value: "Grade3", label: "Grade3" },
];

export const transactionrows = [
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 2,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 3,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 4,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 5,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 6,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 7,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 8,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
];

export const transactionColumns = [
  { field: "col1", headerName: "Bill Created Date", width: 200 },
  { field: "col2", headerName: "Bill Number", width: 150 },
  { field: "col3", headerName: "NPC Ref", width: 150 },
  { field: "col4", headerName: "Amount", width: 150 },
  { field: "col5", headerName: "Status", width: 100 },
  { field: "col6", headerName: "Full Name", width: 250 },
  { field: "col7", headerName: "Payment Date", width: 300 },
  { field: "col8", headerName: "Due Date", width: 300 },
];

export const branchModalRows = [
  {
    id: 1,
    col1: "#12152198",
    col2: "Bomb Branch",
  },
  {
    id: 2,
    col1: "#12152198",
    col2: "Bomb Branch",
  },
  {
    id: 3,
    col1: "#12152198",
    col2: "Bomb Branch",
  },
  {
    id: 4,
    col1: "#12152198",
    col2: "Bomb Branch",
  },
  {
    id: 5,
    col1: "#12152198",
    col2: "Bomb Branch",
  },
  {
    id: 6,
    col1: "#12152198",
    col2: "Bomb Branch",
  },
  {
    id: 7,
    col1: "#12152198",
    col2: "Bomb Branch",
  },
  {
    id: 8,
    col1: "#12152198",
    col2: "Bomb Branch",
  },
];

export const branchModalColumns = [
  { field: "col1", headerName: "Branch ID", width: 300 },
  { field: "col2", headerName: "BranchName", width: 300 },
];
export const refundsRows = [
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Accepted",
  },
  {
    id: 2,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Rejected",
  },
  {
    id: 3,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "In-Review",
  },
  {
    id: 4,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "",
  },
  {
    id: 5,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "",
  },
  {
    id: 6,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "",
  },
  {
    id: 7,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "",
  },
  {
    id: 8,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "",
  },
];

export const refundsColumns = [
  { field: "col1", headerName: "Refund Applied Date", width: 200 },
  { field: "col2", headerName: "Bill Number", width: 150 },
  { field: "col3", headerName: "NPC Ref", width: 150 },
  { field: "col4", headerName: "Amount", width: 150 },
  {
    field: "col5",
    headerName: "Status",
    renderCell: () => (
      <Typography variant="h5" style={{ color: "#1FB713" }}>
        Paid
      </Typography>
    ),
    width: 100,
  },
  { field: "col6", headerName: "Full Name", width: 250 },
  { field: "col7", headerName: "Payment Date", width: 300 },
  { field: "col8", headerName: "Refund Status", width: 250 },
];

export const importBulkRows = [
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 23,2020",
  },
  {
    id: 2,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 23,2020",
  },
  {
    id: 3,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 23,2020",
  },
  {
    id: 4,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 23,2020",
  },
  {
    id: 5,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 23,2020",
  },
  {
    id: 6,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 23,2020",
  },
  {
    id: 7,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 23,2020",
  },
  {
    id: 8,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 23,2020",
  },
];

export const importBulkColumns = [
  { field: "col1", headerName: "Bill Created Date", width: 200 },
  { field: "col2", headerName: "Bill Number", width: 150 },
  { field: "col3", headerName: "NPC Ref", width: 150 },
  { field: "col4", headerName: "Amount", width: 150 },
  {
    field: "col5",
    headerName: "Status",
    renderCell: () => (
      <Typography variant="h5" color="secondary">
        Pending
      </Typography>
    ),
    width: 100,
  },
  { field: "col6", headerName: "Full Name", width: 250 },
  { field: "col7", headerName: "Due Date", width: 300 },
];

export const listMerchantColumns = [
  { field: "col1", headerName: "ID", width: 150 },
  {
    field: "col2",
    headerName: "Merchant Full Name",
    renderCell: () => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={userIcon}
          width="20px"
          height="25px"
          alt="user"
          style={{ marginRight: "15px" }}
        />
        <Typography variant="h5" color="primary">
          Bersufekad Getachew
        </Typography>
      </div>
    ),
    width: 350,
  },
  { field: "col3", headerName: "Amount Collected", width: 200 },
  { field: "col4", headerName: "Paid/Pending", width: 200 },
  { field: "col5", headerName: "Date Joined", width: 250 },
  {
    field: "col6",
    headerName: "Enable/Disable",
    renderCell: () => (
      <FormControlLabel control={<IOSSwitch name="checkedA" />} />
    ),
    width: 250,
  },
  {
    field: "col7",
    headerName: "Action",
    renderCell: () => <DeleteIcon color="error" />,
    width: 150,
  },
];

export const listMerchantRows = [
  {
    id: 1,
    col1: "NPC_13289",
    col2: "Bersufekad Getachew",
    col3: "ETB12,012",
    col4: "12/45",
    col5: "June 29,2020",
    col6: "",
    col7: "",
  },
  {
    id: 2,
    col1: "NPC_13289",
    col2: "Bersufekad Getachew",
    col3: "ETB12,012",
    col4: "12/45",
    col5: "June 29,2020",
    col6: "",
    col7: "",
  },
  {
    id: 3,
    col1: "NPC_13289",
    col2: "Bersufekad Getachew",
    col3: "ETB12,012",
    col4: "12/45",
    col5: "June 29,2020",
    col6: "",
    col7: "",
  },
  {
    id: 4,
    col1: "NPC_13289",
    col2: "Bersufekad Getachew",
    col3: "ETB12,012",
    col4: "12/45",
    col5: "June 29,2020",
    col6: "",
    col7: "",
  },
  {
    id: 5,
    col1: "NPC_13289",
    col2: "Bersufekad Getachew",
    col3: "ETB12,012",
    col4: "12/45",
    col5: "June 29,2020",
    col6: "",
    col7: "",
  },
  {
    id: 6,
    col1: "NPC_13289",
    col2: "Bersufekad Getachew",
    col3: "ETB12,012",
    col4: "12/45",
    col5: "June 29,2020",
    col6: "",
    col7: "",
  },
  {
    id: 7,
    col1: "NPC_13289",
    col2: "Bersufekad Getachew",
    col3: "ETB12,012",
    col4: "12/45",
    col5: "June 29,2020",
    col6: "",
    col7: "",
  },
  {
    id: 8,
    col1: "NPC_13289",
    col2: "Bersufekad Getachew",
    col3: "ETB12,012",
    col4: "12/45",
    col5: "June 29,2020",
    col6: "",
    col7: "",
  },
];

export const listBranchColumns = [
  { field: "col1", headerName: "ID", width: 150 },
  { field: "col2", headerName: "Branch Full Name", width: 300 },
  { field: "col3", headerName: "Total Merchants", width: 300 },
  { field: "col4", headerName: "Date Joined", width: 300 },
  {
    field: "col5",
    headerName: "Enable/Disable",
    renderCell: () => (
      <FormControlLabel control={<IOSSwitch name="checkedA" />} />
    ),
    width: 250,
  },
  {
    field: "col6",
    headerName: "Action",
    renderCell: () => <DeleteIcon color="error" />,
    width: 300,
  },
];

export const listBranchRows = [
  {
    id: 1,
    col1: "#121782",
    col2: "Tobia Branch",
    col3: "135",
    col4: "Jun 29,2020",
    col5: "",
    col6: "",
  },
  {
    id: 2,
    col1: "#121782",
    col2: "Tobia Branch",
    col3: "135",
    col4: "Jun 29,2020",
    col5: "",
    col6: "",
  },
  {
    id: 3,
    col1: "#121782",
    col2: "Tobia Branch",
    col3: "135",
    col4: "Jun 29,2020",
    col5: "",
    col6: "",
  },
  {
    id: 4,
    col1: "#121782",
    col2: "Tobia Branch",
    col3: "135",
    col4: "Jun 29,2020",
    col5: "",
    col6: "",
  },
  {
    id: 5,
    col1: "#121782",
    col2: "Tobia Branch",
    col3: "135",
    col4: "Jun 29,2020",
    col5: "",
    col6: "",
  },
  {
    id: 6,
    col1: "#121782",
    col2: "Tobia Branch",
    col3: "135",
    col4: "Jun 29,2020",
    col5: "",
    col6: "",
  },
  {
    id: 7,
    col1: "#121782",
    col2: "Tobia Branch",
    col3: "135",
    col4: "Jun 29,2020",
    col5: "",
    col6: "",
  },
  {
    id: 8,
    col1: "#121782",
    col2: "Tobia Branch",
    col3: "135",
    col4: "Jun 29,2020",
    col5: "",
    col6: "",
  },
];

export const listUserRows = [
  {
    id: 1,
    col1: "Bersufekad Getachew",
    col2: "NPC",
    col3: "Admin",
    col4: "Jun 29,2020",
    col5: "",
  },
  {
    id: 2,
    col1: "Bersufekad Getachew",
    col2: "NPC",
    col3: "Admin",
    col4: "Jun 29,2020",
    col5: "",
  },
  {
    id: 3,
    col1: "Bersufekad Getachew",
    col2: "NPC",
    col3: "Admin",
    col4: "Jun 29,2020",
    col5: "",
  },
  {
    id: 4,
    col1: "Bersufekad Getachew",
    col2: "NPC",
    col3: "Admin",
    col4: "Jun 29,2020",
    col5: "",
  },
  {
    id: 5,
    col1: "Bersufekad Getachew",
    col2: "NPC",
    col3: "Admin",
    col4: "Jun 29,2020",
    col5: "",
  },
  {
    id: 6,
    col1: "Bersufekad Getachew",
    col2: "NPC",
    col3: "Admin",
    col4: "Jun 29,2020",
    col5: "",
  },
  {
    id: 7,
    col1: "Bersufekad Getachew",
    col2: "NPC",
    col3: "Admin",
    col4: "Jun 29,2020",
    col5: "",
  },
  {
    id: 8,
    col1: "Bersufekad Getachew",
    col2: "NPC",
    col3: "Admin",
    col4: "Jun 29,2020",
    col5: "",
  },
];

export const listUserColumns = [
  {
    field: "col1",
    headerName: "Full Name",
    renderCell: () => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={userIcon}
          width="20px"
          height="25px"
          alt="user"
          style={{ marginRight: "15px" }}
        />
        <Typography variant="h5" color="primary">
          Bersufekad Getachew
        </Typography>
      </div>
    ),
    width: 400,
  },
  { field: "col2", headerName: "Organization", width: 300 },
  { field: "col3", headerName: "Role", width: 250 },
  { field: "col4", headerName: "Date Joined", width: 300 },
  {
    field: "col5",
    headerName: "Enable/Disable",
    renderCell: () => (
      <FormControlLabel control={<IOSSwitch name="checkedA" />} />
    ),
    width: 300,
  },
];

export const reportRows = [
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
  {
    id: 1,
    col1: "Jan 20,2021 07:33 PM",
    col2: "128912",
    col3: "NPC11291217",
    col4: "ETB12,127.00",
    col5: "Paid",
    col6: "Bersufekad Getachew",
    col7: "Jan 22,2020 02:33 PM",
    col8: "Jan 23,2020",
  },
];

export const reportColumns = [
  { field: "col1", headerName: "Bill Created Date", width: 200 },
  { field: "col2", headerName: "Bill Number", width: 150 },
  { field: "col3", headerName: "NPC Ref", width: 150 },
  { field: "col4", headerName: "Amount", width: 150 },
  {
    field: "col5",
    headerName: "Status",
    renderCell: () => (
      <Typography variant="h5" style={{ color: "#1FB713" }}>
        Paid
      </Typography>
    ),
    width: 100,
  },
  { field: "col6", headerName: "Full Name", width: 250 },
  { field: "col7", headerName: "Payment Date", width: 300 },
  { field: "col8", headerName: "Due Date", width: 300 },
];

export const dashboardRows = [
  {
    id: 1,
    col1: "1",
    col2: "Bank Of Abyssina",
    col3: "1,499",
    col4: "500",
    col5: "1,418,127",
  },
  {
    id: 2,
    col1: "1",
    col2: "Bank Of Abyssina",
    col3: "1,499",
    col4: "500",
    col5: "1,418,127",
  },
  {
    id: 3,
    col1: "1",
    col2: "Bank Of Abyssina",
    col3: "1,499",
    col4: "500",
    col5: "1,418,127",
  },
  {
    id: 4,
    col1: "1",
    col2: "Bank Of Abyssina",
    col3: "1,499",
    col4: "500",
    col5: "1,418,127",
  },
  {
    id: 5,
    col1: "1",
    col2: "Bank Of Abyssina",
    col3: "1,499",
    col4: "500",
    col5: "1,418,127",
  },
  {
    id: 6,
    col1: "1",
    col2: "Bank Of Abyssina",
    col3: "1,499",
    col4: "500",
    col5: "1,418,127",
  },
];

export const dashboardColumns = [
  { field: "col1", headerName: " ", width: 10 },
  { field: "col2", headerName: "Organization", width: 250 },
  { field: "col3", headerName: "Total Bills", width: 200 },
  { field: "col4", headerName: "Pending Bills", width: 200 },
  { field: "col5", headerName: "Total Collected", width: 300 },
];

export const dashboardBranchRows = [
  {
    id: 1,
    col1: "1",
    col2: "Bersufekad Getachew",
    col3: "1,489",
    col4: "500",
    col5: "ETB12,389",
  },
  {
    id: 2,
    col1: "1",
    col2: "Bersufekad Getachew",
    col3: "1,489",
    col4: "500",
    col5: "ETB12,389",
  },
  {
    id: 3,
    col1: "1",
    col2: "Bersufekad Getachew",
    col3: "1,489",
    col4: "500",
    col5: "ETB12,389",
  },
  {
    id: 4,
    col1: "1",
    col2: "Bersufekad Getachew",
    col3: "1,489",
    col4: "500",
    col5: "ETB12,389",
  },
  {
    id: 5,
    col1: "1",
    col2: "Bersufekad Getachew",
    col3: "1,489",
    col4: "500",
    col5: "ETB12,389",
  },
  {
    id: 6,
    col1: "1",
    col2: "Bersufekad Getachew",
    col3: "1,489",
    col4: "500",
    col5: "ETB12,389",
  },
];
export const dashboardBranchColumns = [
  { field: "col1", headerName: " ", width: 10 },
  { field: "col2", headerName: "Merchant Name", width: 250 },
  { field: "col3", headerName: "Paid Bills", width: 200 },
  { field: "col4", headerName: "Pending Bills", width: 200 },
  { field: "col5", headerName: "Total Collected", width: 300 },
];
export const dashboardMerchantColumns = [
  { field: "col1", headerName: " ", width: 100 },
  { field: "col2", headerName: "Full Name", width: 250 },
  { field: "col3", headerName: "Bill ID", width: 200 },
  { field: "col4", headerName: "Bill Amount", width: 200 },
  {
    field: "col5",
    headerName: "Bill Status",
    renderCell: () => (
      <Typography variant="h5" style={{ color: "#1FB713" }}>
        Paid
      </Typography>
    ),
    width: 300,
  },
];

export const dashboardMerchantRows = [
  {
    id: 1,
    col1: "Jan27",
    col2: "Bersufekad Getachew",
    col3: "#1281",
    col4: "500",
    col5: "",
  },
  {
    id: 2,
    col1: "Jan27",
    col2: "Bersufekad Getachew",
    col3: "#1281",
    col4: "500",
    col5: "",
  },
  {
    id: 3,
    col1: "Jan27",
    col2: "Bersufekad Getachew",
    col3: "#1281",
    col4: "500",
    col5: "",
  },
  {
    id: 4,
    col1: "Jan27",
    col2: "Bersufekad Getachew",
    col3: "#1281",
    col4: "500",
    col5: "",
  },
  {
    id: 5,
    col1: "Jan27",
    col2: "Bersufekad Getachew",
    col3: "#1281",
    col4: "500",
    col5: "",
  },
  {
    id: 6,
    col1: "Jan27",
    col2: "Bersufekad Getachew",
    col3: "#1281",
    col4: "500",
    col5: "",
  },
];

export const colorCode1 = [
  { color: "#087ABC", name: "Bank Of Abyssina" },
  { color: "#EF8A29", name: "Zemen Bus" },
  { color: "#00AB9C", name: "Habesha Clothing" },
];
export const colorCode2 = [
  { color: "#EA4648", name: "Selam Bus" },
  { color: "#EA4648", name: "Selam Bus" },
];
export const logRows = [
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
  {
    id: 1,
    col1: "Jan 20,2020 10:13PM",
    col2: "Besse",
    col3: "NPC",
    col4: "Login",
  },
];

export const logColumns = [
  { field: "col1", headerName: "Date and Time", width: 500 },
  { field: "col2", headerName: "Username", width: 400 },
  { field: "col3", headerName: "Organization", width: 400 },
  { field: "col4", headerName: "Log Type", width: 400 },
];

export const options = {
  animationEnabled: true,
  exportFileName: "New Year Resolutions",
  width: 300,
  height: 400,
  data: [
    {
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      legendMarkerType: "square",
      toolTipContent: "{label}: <strong>{y}%</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      indexLabelFontColor: "white",
      dataPoints: [
        { y: 60, label: "Bank Of Abyssina" },
        { y: 26, label: "Zemen Bus" },
        { y: 12, label: "Habesha Clothing" },
        { y: 2, label: "Selam Bus" },
      ],
    },
  ],
};
export const options1 = {
  theme: "light2",
  title: {
    text: "Each Planet 's Mass and Number of Moons",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  axisY: {
    prefix: "",
  },
  toolTip: {
    shared: true,
  },
  data: [
    {
      type: "area",
      name: "Number of Moons",
      showInLegend: true,
      dataPoints: [
        { label: "Mercury", y: 0 },
        { label: "Venus", y: 1 },
        { label: "Earth", y: 3 },
        { label: "Mars", y: 5 },
        { label: "Jupiter", y: 67 },
        { label: "Saturn", y: 60 },
        { label: "Uranus", y: 22 },
        { label: "Meptune", y: 17 },
      ],
    },
    {
      type: "area",
      name: "Planet Mass(x1,000 km)",
      showInLegend: true,
      dataPoints: [
        { label: "Mercury", y: 4 },
        { label: "Venus", y: 17 },
        { label: "Earth", y: 15 },
        { label: "Mars", y: 8 },
        { label: "Jupiter", y: 140 },
        { label: "Saturn", y: 115 },
        { label: "Uranus", y: 50 },
        { label: "Meptune", y: 50 },
      ],
    },
  ],
};
