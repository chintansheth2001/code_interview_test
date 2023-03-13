import { useGetItems } from "@/data/useGetItems";
import { useState } from "react";

import type {Item} from "@/data/useGetItems";

type ListItemPorp ={
  dataItem: Item
}

export const Test1 = () => {
  const [btnText, setBtnText] = useState(true)
  const [item, setItems] = useState<Item[] >( []);
  const handelBtnText = () => {
    setBtnText(!btnText)
  }
  const handleFetch =() =>{ 
    const dataItems = useGetItems()    
    setItems( dataItems.data)
  }
  return (
    <>
      <div>Test 1</div>
      <button onClick={() =>{handelBtnText()}}>{btnText ? 'Button' : 'Clicked'}</button>
      <button onClick={()=>{handleFetch()}}>Fetch</button>
      {item.map( (item, index) => {
        return(
          <ListItem key={index} dataItem={item} />
        )
      })}
    </>
  )
}

const ListItem = ({dataItem}:ListItemPorp) =>{
  const [showDesc, setShowDesc] = useState(false)
  const handleShowDesc = () => {
    setShowDesc(!showDesc)
  }
  return (
  <div onClick={() => {handleShowDesc()}}>
    <div>{dataItem.name}</div>
    
    {showDesc ? <div>{dataItem.description}</div> : null}
     
  </div>

  )
}