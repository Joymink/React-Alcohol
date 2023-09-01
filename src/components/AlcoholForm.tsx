
import Button from "./Button"
import Input from "./Input"
import {useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseCategory, choosePrice, chooseProof,chooseYear } from "../redux/slices/RootSlice"

interface AlcoholFormProps {
    id?: string,
    data?: {}
}

const AlcoholForm= (props:AlcoholFormProps) =>  {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        let temp = String(props.id)
        console.log(temp)

        if (props.id != '') {
          server_calls.update(temp.split(',')[0], data)
          console.log(`Updated: ${ data.brand } ${ props.id }`)
          setTimeout(()=> {window.location.reload()}, 10000)
          event.target.reset()
        } else {
          dispatch(chooseBrand(data.brand));
          dispatch(chooseCategory(data.category));
          dispatch(chooseProof(data.proof));
          dispatch(chooseYear(data.year));
          dispatch(choosePrice(data.price));

          server_calls.create(store.getState())
          setTimeout(()=> {window.location.reload()},1000)
        }
    }

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="brand">Brand</label>
            <Input {...register('brand')} name='brand' placeholder="Brand" />
          </div>
          <div>
            <label htmlFor="category">Kind Of Liquor</label>
            <Input {...register('category')} name='category' placeholder="Kind of Liquor" />
          </div>
          <div>
            <label htmlFor="proof">Proof</label>
            <Input {...register('proof')} name='proof' placeholder="proof" />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <Input {...register('year')} name='year' placeholder="Year" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Input {...register('price')} name='price' placeholder="Price" />
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

export default AlcoholForm

