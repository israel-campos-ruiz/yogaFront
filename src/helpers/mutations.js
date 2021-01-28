import { gql } from "@apollo/client";

export const INSERT_USER = gql`
  mutation createCliente($input: InputClient) {
    createClient(input: $input) {
      _id
      nombre
      email
      edad
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  mutation authenticateUser($input: InputToken) {
    authenticateUser(input: $input) {
      client {
        _id
        nombre
        edad
        email
        telefono
      }
      token
    }
  }
`;

export const NOTIFY_USER = gql`
  mutation notifyUserAndAddClass($input: InputNotify) {
    notifyUserAndAddClass(input: $input) {
      nombre
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID, $input: InputClient) {
    updateUser(_id: $id, input: $input) {
      _id
      nombre
      email
      edad
      clase {
        _id
      }
    }
  }
`;

export const DELETE_USER_CLASS = gql`
  mutation deleteUserClass($id: ID, $_idClass: ID) {
    deleteUserClass(_id: $id, _idClass: $_idClass) {
      nombre
    }
  }
`;
