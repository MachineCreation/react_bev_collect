import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBase_liquor, chooseName, chooseGlass_type, chooseRecipe, chooseComments } from "../Redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[]
  onClose: () => void;
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.name} ${props.id}`)
      setTimeout(() => { window.location.reload() }, 1000);
      event.target.reset()
    } else {
      dispatch(chooseBase_liquor(data.base_liquor));
      dispatch(chooseName(data.name));
      dispatch(chooseGlass_type(data.glass_type));
      dispatch(chooseRecipe(data.recipe));
      dispatch(chooseComments(data.comments));

      server_calls.create(store.getState())
      setTimeout(() => { window.location.reload() }, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="base_liquor">Base Liquor</label>
          <Input {...register('base_liquor')} name='base_liquor' placeholder="Base Liquor" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="glass_type">Glass Type</label>
          <Input {...register('glass_type')} name='glass_type' placeholder="Glass Type" />
        </div>
        <div>
          <label htmlFor="recipe">Recipe</label>
          <Input {...register('recipe')} name='recipe' placeholder="Recipe" />
        </div>
        <div>
          <label htmlFor="comments">Comments</label>
          <Input {...register('comments')} name='comments' placeholder="Comments" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm