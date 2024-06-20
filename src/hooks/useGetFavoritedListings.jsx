import React, { useEffect, useState } from "react";
import axios from "axios";

export const useGetFavoritedListings = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [status, setStatus] = useState();
  const [favoritedListings, setFavoritedListings] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const loadListing = async () => {
    setLoading(true);

    await axios
      .get("/api/saved-listings")
      .then((res) => {
        const favoritedListings = res?.data?.length
          ? res.data?.filter((listing) => listing.isFavorited)
          : [];
        setFavoritedListings(favoritedListings);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error?.message);
        setFavoritedListings([]);
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
      setFavoritedListings([]);
      setErrorMessage("");
      setStatus();
      setLoading();
      setError(false);
    };
  }, []);

  return {
    favoritedListings,
    errorMessage,
    loading,
    error,
    status,
  };
};
