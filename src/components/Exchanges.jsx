import React, { useState } from "react";

import { useGetCryptoExchangesQuery } from "../services/cryptoApi";

const Exchanges = () => {
  const { data } = useGetCryptoExchangesQuery();

  console.log(data);
  return <div>Exchanges</div>;
};

export default Exchanges;
