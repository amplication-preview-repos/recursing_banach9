import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LibraryDContentList } from "./libraryDContent/LibraryDContentList";
import { LibraryDContentCreate } from "./libraryDContent/LibraryDContentCreate";
import { LibraryDContentEdit } from "./libraryDContent/LibraryDContentEdit";
import { LibraryDContentShow } from "./libraryDContent/LibraryDContentShow";
import { LibraryAContentList } from "./libraryAContent/LibraryAContentList";
import { LibraryAContentCreate } from "./libraryAContent/LibraryAContentCreate";
import { LibraryAContentEdit } from "./libraryAContent/LibraryAContentEdit";
import { LibraryAContentShow } from "./libraryAContent/LibraryAContentShow";
import { LibraryCContentList } from "./libraryCContent/LibraryCContentList";
import { LibraryCContentCreate } from "./libraryCContent/LibraryCContentCreate";
import { LibraryCContentEdit } from "./libraryCContent/LibraryCContentEdit";
import { LibraryCContentShow } from "./libraryCContent/LibraryCContentShow";
import { LibraryBContentList } from "./libraryBContent/LibraryBContentList";
import { LibraryBContentCreate } from "./libraryBContent/LibraryBContentCreate";
import { LibraryBContentEdit } from "./libraryBContent/LibraryBContentEdit";
import { LibraryBContentShow } from "./libraryBContent/LibraryBContentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ContentIntegrator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LibraryDContent"
          list={LibraryDContentList}
          edit={LibraryDContentEdit}
          create={LibraryDContentCreate}
          show={LibraryDContentShow}
        />
        <Resource
          name="LibraryAContent"
          list={LibraryAContentList}
          edit={LibraryAContentEdit}
          create={LibraryAContentCreate}
          show={LibraryAContentShow}
        />
        <Resource
          name="LibraryCContent"
          list={LibraryCContentList}
          edit={LibraryCContentEdit}
          create={LibraryCContentCreate}
          show={LibraryCContentShow}
        />
        <Resource
          name="LibraryBContent"
          list={LibraryBContentList}
          edit={LibraryBContentEdit}
          create={LibraryBContentCreate}
          show={LibraryBContentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
