import { useForm } from "react-hook-form"
import { useLists } from "../../../redux/hooks/useLists"
import styles from "./ListForm.module.scss"

const ListForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const { useAddList } = useLists()

  const onSubmit = (data: { listTitle: string }) => {
    const cleanListTitle = data.listTitle.trim()

    if (cleanListTitle) {
      useAddList(cleanListTitle)
      reset()
    }
  }

  return (
    <form className={styles.listForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        placeholder="+     Create new list"
        {...register("listTitle")}
      />
    </form>
  )
}

export default ListForm
