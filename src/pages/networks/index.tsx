import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

import { firestore } from "../../services/firebaseConnection";
import {
    setDoc,
    doc,
    getDoc
} from 'firebase/firestore'

export function Networks(){
  const [github, setGithub] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [youtube, setYoutube] = useState("")
  const [tiktok, setTiktok] = useState("")

  useEffect(() => {
   function loadLinks(){
     const docRef = doc(firestore, "social", "link")
     getDoc(docRef)
     .then((snapshot) => {
       if(snapshot.data() !== undefined){
        setGithub(snapshot.data()?.github)
        setLinkedin(snapshot.data()?.linkedin)
        setFacebook(snapshot.data()?.facebook)
        setInstagram(snapshot.data()?.instagram)
        setYoutube(snapshot.data()?.youtube)
        setTiktok(snapshot.data()?.tiktok)
       }
     })
   }
    loadLinks();
  }, [])

  function handleRegister(e: FormEvent){
    e.preventDefault();

    setDoc(doc(firestore, "social", "link"), {
      github: github,
      linkedin: linkedin,
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
      tiktok: tiktok
    })
    .then(() => {
      console.log("CADASTRADOS COM SUCESSO!")
    })
    .catch((error) => {
      console.log("ERRO AO SALVAR" + error)
    })
    
  }

  return(
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header/>
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>
       <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
         <label className="text-white font-medium mt-2 mb-2">Github</label>
         <Input
         type="url"
         placeholder="Digite a url do Github..."
         value={github}
         onChange={ (e) => setGithub(e.target.value) }
         />
         <label className="text-white font-medium mt-2 mb-2">Linkedin</label>
         <Input
         type="url"
         placeholder="Digite a url do Linkedin..."
         value={linkedin}
         onChange={ (e) => setLinkedin(e.target.value) }
         />
         <label className="text-white font-medium mt-2 mb-2">Facebook</label>
         <Input
         type="url"
         placeholder="Digite a url do Facebook..."
         value={facebook}
         onChange={ (e) => setFacebook(e.target.value) }
         />
         <label className="text-white font-medium mt-2 mb-2">Instagram</label>
         <Input
         type="url"
         placeholder="Digite a url do Instagram..."
         value={instagram}
         onChange={ (e) => setInstagram(e.target.value) }
         />
         <label className="text-white font-medium mt-2 mb-2">Youtube</label>
         <Input
         type="url"
         placeholder="Digite a url do Youtube..."
         value={youtube}
         onChange={ (e) => setYoutube(e.target.value) }
         />
         <label className="text-white font-medium mt-2 mb-2">Tiktok</label>
         <Input
         type="url"
         placeholder="Digite a url do Tiktok..."
         value={tiktok}
         onChange={ (e) => setTiktok(e.target.value) }
         />
          <button 
            type="submit"
           className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium" 
          >
           Salvar Links
          </button>
       </form>
    </div>
  )
}

