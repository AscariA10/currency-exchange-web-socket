import styles from "./app.module.css";

function App() {
   return (
      <>
         <div className={styles.wrapper}>
            <input type="number" name="amount" />
            <input type="radio" name="operation" value="buy" />
            <input type="radio" name="operation" value="sell" />
            <p>result:</p>
         </div>
      </>
   );
}

export default App;
