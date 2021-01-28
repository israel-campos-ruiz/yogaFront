import React from "react";
import AppRouter from "./routes/AppRouter";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => (
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </ApolloProvider>
);

export default App;
