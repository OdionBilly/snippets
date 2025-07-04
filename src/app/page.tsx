import { db } from "@/db";
import Link from "next/link";

export default  async function Home() {
    
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) =>  {

    return(
      <Link 
          key={snippet.id}
          href={`/snippets/${snippet.id}`}
          className="flex justify-between items-center border p-2 rounded"
           >
            <div> 
                <h1>{snippet.title}</h1>
             </div>
             <div>View</div>
             
      </Link>
    )
  } )

  return (
    <div className="my-15">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">View New</Link>
      </div>
         <h1 className="flex flex-col gap-3">{renderedSnippets}</h1>
    </div>
  );
}
