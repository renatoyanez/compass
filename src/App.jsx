import React from "react";
import Routes from "./routes";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage";

// const MOCK_API_RESPONSE = {
//   id: "1235",
//   address: "123 Main St",
//   city: "New York City",
//   state: "NY",
//   zipCode: "10001",
//   price: 1000000,
//   bedrooms: 2,
//   bathrooms: 1.5,
//   isSaved: true,
//   isFavorited: true,
//   openHouses: [
//     {
//       date: "2024-6-01",
//       time: "10:00 AM",
//     },
//     {
//       date: "2024-6-02",
//       time: "11:00 AM",
//     },
//     {
//       date: "2024-7-03",
//       time: "12:00 PM",
//     },
//   ],
// };

const App = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Routes />
      </ErrorBoundary>
    </div>
  );
};

export default App;
