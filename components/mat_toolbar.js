
import React from 'react';
import styles from "../styles/Cube.module.css";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function Mat_toolbar() {
    return (

        <div>
            <div className={styles.app_titlebar_txt} >
                <span style={{ width: "95%", display: "inline-block" }}>
                    Cube.js OS Analytics
                  </span>
                <a className={styles.mat_button_wrapper} tabIndex="0" href="#">
                    <span >

                    </span>
                </a>
            </div>
        </div >

    );
}
