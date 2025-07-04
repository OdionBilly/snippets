
import { db } from "@/db";
import { redirect } from "next/navigation";


export default function SnippetCreatePage() {

    async function createSnippet( formData : FormData){
        // this is a server action
        "use server";

        // check the user inpute making sure they are valid
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;


        // create a new snippet in the database
      const snippet =  await db.snippet.create({
            data : {
                title,
                code,
            }
        })
        console.log(snippet)

        // redirect to home page
        redirect('/');


    }
    

    return<form action={createSnippet}>
        <h3 className="font-bold m-3">Create A Snippet</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className='w-12' htmlFor="">Title</label>
                <input
                className="w-full p-2 border rounded " 
                name="title" id="title"/>
            </div>
             <div className="flex gap-4">
                <label className='w-12' htmlFor="">code</label>
                <textarea
                className="w-full p-2 border rounded " 
                name="code" id="code"/>
            </div>
            <button type="submit" className="rounded p-2 bg-blue-200">create</button>
        </div>
    </form>

    
}