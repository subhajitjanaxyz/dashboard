import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
export const api=createApi ({
    reducerPath:"",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/"}),
    endpoints:(builder)=>({
        // get single post data 
        Getnjspost:builder.query(
           {
              query:(h)=>`api/single/${h}`
            
            
            }
        
        ),
        //get all post data
        Getallpostdata:builder.query(
            {
                query:()=>"api/get"
            }
        ),
        // create post
        Createnjpost:builder.mutation({
            query:(dataonj)=>({
                url:"api/post",
                method:"POST",
                body:dataonj
            })
        }),
        Deletpost:builder.mutation({
            query:(params)=>(
                {
                    url:`api/del/${params}`,
                    method:"DELETE"
                }    
            )
        }),
        //update data
        Updatepost:builder.mutation({
            query:({id,body})=>({ 
                
                url:`api/u/${id}`,
                method:"PUT",
                body

            })
        })

    })
})

export const {useLazyGetnjspostQuery,useGetallpostdataQuery,useCreatenjpostMutation,useDeletpostMutation,useUpdatepostMutation}=api