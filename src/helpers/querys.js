import { gql } from "@apollo/client";

export const GETCLASES = gql`
  query getClases {
    getClases {
      _id
      nombre
      img
      descripcion
      nombreProfesor
    }
  }
`;

export const GET_CLIENT = gql`
  query getClient($input: ID) {
    getClient(id: $input) {
      _id
      nombre
      email
      edad
      clase {
        _id
        nombre
        descripcion
      }
    }
  }
`;
