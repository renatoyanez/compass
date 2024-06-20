import React, { useEffect, useState } from "react";
import axios from "axios";

export const useGetListingDetail = (id) => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [status, setStatus] = useState();
  const [listingDetail, setListingDetail] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const loadListing = async () => {
    setLoading(true);

    await axios
      .get(`/api/saved-listings/${id}`)
      .then((res) => {
        setListingDetail(res.data);
      })
      .catch((error) => {
        setErrorMessage(error?.message);
        setListingDetail([]);
        const status = error.response?.status ?? 500;
        setStatus(status);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadListing().catch(() => setError(true));
    return () => {
      setListingDetail([]);
    };
  }, []);

  return {
    listingDetail,
    errorMessage,
    loading,
    error,
    status,
  };
};
