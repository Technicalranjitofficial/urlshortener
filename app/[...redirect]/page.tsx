import { handleOnFetchData } from '@/ServerActions'
import ClickBtn from '@/components/ClickBtn';
import ScrollToBtn from '@/components/ScrollToBtn';
import React from 'react'

const page = async({params}:{params:{redirect:string}}) => {


  const data = await handleOnFetchData(params.redirect);
  console.log("da",data);
  
  
  return (
    <div>
     <ScrollToBtn/>
      <h1>Here we are</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nihil qui, iure adipisci officia necessitatibus id pariatur magni eaque magnam, asperiores, cumque possimus ut quidem inventore deleniti corporis atque!
      <ClickBtn  url={data&&  data}/>
    </div>
  )
}

export default page
