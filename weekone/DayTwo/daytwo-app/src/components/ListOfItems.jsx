import React from 'react'

const ListOfItems = () => {
    let dataArr = [

    ]
    let listArr = dataArr.map((data) => {
        return( <div>
           <div>{data.name}</div>
           <div>{data.location}</div>
         </div>);
       })
       return
      ( 
          <div>
         {listArr}
       </div>
       )
     };
}