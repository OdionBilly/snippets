 
import { db } from "@/db"
import { notFound } from "next/navigation"
import SnippetsEditForm from "@/components/snippets-edit-form"




// interface for the props bcos typscript rule
interface SnippetEditPageProps {
    
    params: {
        id: string
    }
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
    
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: {id}
    })

    if(!snippet){
        return notFound();
    }


    return(
        <div>
            {/* <h1><snippetseditform/></h1> */}
            <SnippetsEditForm snippet={snippet}/>
        </div>
    )
  
}