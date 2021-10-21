import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/sass/profile.module.scss";
import {
  faCoffee,
  faHeart,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../components/Avatar";

const Profile: NextPage = () => {
  const [isSelected, setIsSelected] = useState(0);

  const select = (num: number) => {
    setIsSelected(num);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.topsection}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_cover}></div>
          <div className={styles.wrapper_content}>
            <div className={styles.wrapper_content_avatar}>
              <Avatar url="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2371&q=80" />
            </div>
            <div className={styles.wrapper_content_buttons}>
              <button
                className={
                  isSelected === 0 ? styles.isSelected : styles.isNotSelected
                }
                onClick={() => select(0)}
              >
                <FontAwesomeIcon
                  icon={faCoffee}
                  color={isSelected === 0 ? "#ffffff" : "#E22140"}
                />
              </button>
              <button
                className={
                  isSelected === 2 ? styles.isSelected : styles.isNotSelected
                }
                onClick={() => select(2)}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  color={isSelected === 2 ? "#ffffff" : "#E22140"}
                />
              </button>
              <button
                className={
                  isSelected === 3 ? styles.isSelected : styles.isNotSelected
                }
                onClick={() => select(3)}
              >
                <FontAwesomeIcon
                  icon={faClipboard}
                  color={isSelected === 3 ? "#ffffff" : "#E22140"}
                />
              </button>
            </div>
            <div className={styles.wrapper_content_info}>
              <div>
                <h4>Номин-Эрдэнэ</h4>
                <h4>Монита</h4>
              </div>
              <div>
                <h4>Btn</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
