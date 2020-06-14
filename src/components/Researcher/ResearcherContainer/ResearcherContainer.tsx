import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  RESEARCHERS_QUERY,
  DELETE_RESEARCHER,
} from "../utils/graphql/researcher.graphql";
import ResearcherList from "../ResearcherList/ResearcherList";
import Loading from "../../Layout/Loading/Loading";

export default function ResearcherContainer() {
  const { data, loading, error, refetch } = useQuery(RESEARCHERS_QUERY);
  const [researchers, setResearchers] = useState<any>([]);
  const [deleteResearcher] = useMutation(DELETE_RESEARCHER);

  async function handleDelete(id: string) {
    await deleteResearcher({
      variables: {
        id,
      },
    });
    refetch();
  }

  useEffect(() => {
    if (!loading && data && refetch) {
      setResearchers(data.researchers);
    }
    refetch();
  }, [data, loading, refetch, researchers]);

  if (loading) return <Loading />;
  if (error) return <p>Error...</p>;

  return (
    <ResearcherList
      researchers={researchers}
      handleDelete={handleDelete}
      refetch={refetch}
    />
  );
}
