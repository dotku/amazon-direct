import styles from './app.module.css';
import {
  Route,
  useLocation,
  Redirect
} from "react-router-dom";
import data from "./data.json";
import { useEffect } from 'react';

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

interface StoreType {
    name: string;
    id: string;
}
interface StoresType {
  [propName: string]: StoreType
}

function AmazonRedirect({storeObj}: {storeObj: StoreType}) {
  window.location.href = `https://www.amazon.com/stores/${storeObj.name}/page/${storeObj.id}?&linkCode=ll2&tag=lyyuan-20`
  return null;
}

export function App() {
  const location = useLocation();
  const pathpart = toTitleCase(location.pathname.substring(1));
  const storeObj: StoreType = (data as StoresType)[pathpart];

  console.log(
    "location", location, 
    "pathpart", pathpart,
  );

  return (
    storeObj? <AmazonRedirect storeObj={storeObj} /> :
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to amazon-direct!</h1>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
