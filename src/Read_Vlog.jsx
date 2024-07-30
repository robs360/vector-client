import React from "react";
import person from './assets/images/person1.jpg'
import book from './assets/images/book.jpg'
const Read_Vlog=()=>{
    return(
        <div className="mx-auto w-[360px] md:w-[540px] lg:w-[750px] mt-2">
             
                  <div className="w-full flex justify-between">
                      <h1 className="text-2xl font-medium">
                        Lorem ipsum dolor sit amet</h1>
                      <div>
                         <img src={person} className="w-[45px] h-[45px] rounded-[50%]"
                          alt="" srcset="" />
                      </div>
                  </div>
                  <div className="w-full mt-2">
                     <img src={book} className="w-full mb-2 h-[380px]" alt="" srcset="" />
                     <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Neque ducimus, voluptatibus enim repellat
                         facilis nemo ut perspiciatis veniam est molestiae. 
                         Fugit, voluptatem! Iste non reiciendis debitis
                          nesciunt, consequatur cumque eligendi facere 
                          natus! Quasi tempora saepe eum odio, cum dolor
                           nesciunt repellendus suscipit molestias! Non 
                           perferendis animi, blanditiis harum provident
                            recusandae quas aliquam doloremque corporis 
                            a pariatur corrupti commodi. Sequi culpa nihil 
                            incidunt consequuntur doloribus amet quo rem, 
                            
                            fugit aspernatur beatae quae placeat minima, 
                            eveniet saepe quasi error, est voluptatibus 
                            voluptas minus repellat soluta quisquam?
                             Voluptates, dolores. Pariatur cupiditate 
                             perferendis id adipisci! Recusandae culpa eius 
                        neque repudiandae quibusdam enim aperiam praesentium.</p>
                  </div>
           
        </div>
    )
}

export default Read_Vlog