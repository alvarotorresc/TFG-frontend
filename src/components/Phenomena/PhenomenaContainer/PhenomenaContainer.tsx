import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Loading from "../../Layout/Loading/Loading";
import {
  PHENOMENA_QUERY,
  DELETE_PHENOMENON,
} from "../utils/graphql/phenomena.graphql";
import PhenomenaList from "../PhenomenaList/PhenomenaList";

export default function PhenomenaContainer() {
  const { data, loading, error, refetch } = useQuery(PHENOMENA_QUERY);
  const [phenomena, setPhenomena] = useState<any>([]);
  const [deletePhenomena] = useMutation(DELETE_PHENOMENON);

  async function handleDelete(id: string) {
    await deletePhenomena({
      variables: {
        id,
      },
    });
    refetch();
  }

  useEffect(() => {
    if (!loading && data && refetch) {
      setPhenomena(data.getPhenomena);
    }
    refetch();
  }, [data, loading, refetch, phenomena]);

  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;

  return (
    <PhenomenaList
      phenomena={phenomena}
      handleDelete={handleDelete}
      refetch={refetch}
    />
  );
}
