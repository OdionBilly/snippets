'use client';
import type { Snippet } from "@prisma/client";


interface SnippetsEditFormProps {

    snippet:Snippet
}


export default function SnippetsEditForm({ snippet } : SnippetsEditFormProps) {

    return (
        <div>
            <h1>client component has snippets with title {snippet.title}</h1>
           
        </div>
    );

}