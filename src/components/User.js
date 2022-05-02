import styles from "./User.module.scss";

function User({ name, age, work, deleteUser }) {

  return (
    <div className={styles.box_user}>
      <span onClick={deleteUser}>X</span>
      <div>
        <h2>Me chamo {name}</h2>
        <h3>Tenho {age} anos</h3>
        <h3>Sou {work}</h3>
      </div>
    </div>
  );
}

export default User