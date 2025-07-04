 import Link from "next/link"
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
            <div className="flex m-4 justify-between item-centers">
               <h1 className="text-xl font-bold">{snippet.title}</h1>
               <div className="flex gap-4">
                   <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded"> Edit</Link>
                   <button className="p-2 border rounded"> Delete</button>
                </div>
            </div>
            <pre className="p-3 border bg-gray-200 border-gray-200">
                <code>{snippet.code}</code>

            </pre>
            
        </div>
    )

    
 }