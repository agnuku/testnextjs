import '../styles/Cube.module.css'
import GridView from '../components/GridView';
import SimplePaper from '../components/page';
import Mat_toolbar from '../components/mat_toolbar';
import Acc from '../components/acc';

import styles from "../styles/Cube.module.css";




const Fiverr = ({onSignIn}) => {
  return (
    <div >
      <Mat_toolbar />
      <div className={styles.body_style}>

        <Acc />
        <GridView />
        {/* divider */}
        <div className={styles.hr} ></div>

        <div className={styles.divider}></div>
        <SimplePaper />
      </div>

    </div>
  );
}

export default Fiverr;
