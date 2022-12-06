import React from 'react';
import { Layout } from '../components';
import {gql} from "graphql-tag";
import {useQuery} from "@apollo/client"
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const TRACKS = gql`
  query Query {
    tracksForHome {
      id
      length
      modulesCount
      thumbnail
      title
      author {
        id
        name
        photo
      }
    }
  }`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const {data, loading, error} = useQuery(TRACKS);


  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
    {data?.tracksForHome?.map((track)=>(<TrackCard track={track}
    />))} </QueryResult></Layout>;
};

export default Tracks;
