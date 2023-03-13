import { useState } from "react";
import type { Mock } from "vitest";

type Test3Props<T> = {
  items:T[]
  onItemClicked: Mock<any[], any>
  onSelectedValueItemClicked?: Mock<any[], any> 
  renderItem: (value:T) => JSX.Element
  values? : SomtingLabel[]
}

type ListingProps<T> = {
  items: T[] 
  renderItem: (value:T) =>  JSX.Element
  onItemClicked?: Mock<any[], any>
}

type SomtingLabel = { value: string; label: string }

type IdLabel = { id: string; label: string }
type SomthingEles = { something: string; else: string; }
type idValues = { id: number; values: SomtingLabel[] }
type ContentTestValue = { content: string; testValue: string }



export const Test3 = <T extends IdLabel |  SomthingEles | idValues | ContentTestValue>({items, onItemClicked, renderItem, values, onSelectedValueItemClicked  }:Test3Props<T>) => {
  
  const [clickValue, setClickValue ] = useState<any[]>([])
  
  return (
    <>      
        <Listing items={items} renderItem={renderItem} onItemClicked={onItemClicked}  />
        
        {values ? 
          <Listing items={values} 
            renderItem={(item) => {
                return (
                  <div onClick={ () => setClickValue([...clickValue, item]) }>{item.label}</div>
                )
              } 
            }
            onItemClicked={onItemClicked}  />
        : 
          null
        }


        { clickValue ? 
          <Listing items={clickValue} 
            renderItem={(item) => {
                return (
                  <div>{`${item.value}/${item.label}`}</div>
                )
              } 
            }
            onItemClicked={onSelectedValueItemClicked}  />
          :
          null
        }
    </>
    );
};

const Listing = <T extends IdLabel |  SomthingEles | idValues | ContentTestValue | SomtingLabel>({items, renderItem, onItemClicked }:ListingProps<T>) => {
  const handleOnClick = (index:number) => {
    if(onItemClicked){
      onItemClicked(items[index]);
    }
  }
  return(
    <>
      {items.map( (item, index) => {
          return(   
            <div key={index} onClick={ () => handleOnClick(index)} >
              {renderItem(item)}
            </div>    
          )
        })} 
    </>
  )
}