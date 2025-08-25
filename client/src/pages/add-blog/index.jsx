import { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";

export default function AddNewBlog() {
  const { formData, setFormData } = useContext(GlobalContext);
  console.log(formData);

  async function handleSaveBlogToDatabase() {}

  return (
    <div className={classes.wrapper}>
      <h1>Add A Blog</h1>
      <div className={classes.formWrapper}>
        <input
          name="title"
          placeholder="Enter Blog Title"
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <button onClick={handleSaveBlogToDatabase}>Add New Blog</button>
      </div>
    </div>
  );
}
