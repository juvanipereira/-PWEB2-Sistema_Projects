import styles from './SubmitsButton.module.css'


function SubmitsButton({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default SubmitsButton