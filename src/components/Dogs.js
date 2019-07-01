import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const getDogs = gql`
    {
        dogs {
            id
            breed
        }
    }
`;

const Dogs = ({ onDogSelected }) => (
  <Query query={getDogs}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <select name="dog" onChange={onDogSelected}>
          {data.dogs.map(dog => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

export default Dogs;