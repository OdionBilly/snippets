 
 import { db } from "@/db"
 import { notFound } from "next/navigation"


 interface SnippetShowProps {
    params:{
        id : string
    }

 }

 export default  async function SnippetShowPage( props : SnippetShowProps) {
    
    await new Promise((resolve) => setTimeout(resolve, 2000));


    const snippet = await db.snippet.findFirst({
        where : {id:parseInt(props.params.id)}
    });

    if(!snippet){
        return notFound();

    }

    return(
        <div>
            <h1>{snippet.title}</h1>
        </div>
    )

    
 }