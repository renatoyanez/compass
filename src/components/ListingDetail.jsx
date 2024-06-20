import React from "react";
import { useParams } from "react-router-dom";
import { useGetListingDetail } from "../hooks";
import Calendar from "./Calendar";
import Spinner from "./Spinner";

const ListingDetail = () => {
  const { listingId } = useParams();
  const { listingDetail, errorMessage, loading, error, status } =
    useGetListingDetail(listingId);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    throw new Error("An error has occurred");
  }
  return (
    <div>
      <div className="calendar-container">
        <Calendar availableTourDays={listingDetail.openHouses || []} />
      </div>
    </div>
  );
};

export default ListingDetail;
