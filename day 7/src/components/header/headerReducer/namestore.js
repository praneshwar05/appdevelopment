import {configureStore} from "@reduxjs/toolkit"
import dashreducer from "./headerreducer"

export default configureStore(
     {
          reducer:{
               name:dashreducer
          }
     }
)