import React, { useEffect } from "react";
import Info from "../components/services/Info";
import Opinions from "../components/services/Opinions";
import ServicesMediYoga from "../components/services/ServicesMediYoga";
import Table from "../components/services/Table";
import { resetScroll } from "../helpers/resetScroll";
import { useQuery } from '@apollo/client'
import { GETCLASES } from "../helpers/querys";
import Loader from "../components/shared/Loader";
const Services = () => {
  useEffect(() => {
    resetScroll();
  }, []);
  const { data, loading, error } = useQuery(GETCLASES);
  return (
    <div>
      {loading && <Loader/>}
      {error && error.message && (
        <div>no se encontro contenido</div>
      )}
      {data && data && (
        <ServicesMediYoga data={data} />
      )}
      {data && data && (
        <Table data={data}/>
      )}
      <Info />
      <Opinions />
    </div>
  );
};

export default Services;
