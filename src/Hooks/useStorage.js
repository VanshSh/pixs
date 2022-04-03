import { useState, useEffect } from 'react'
import { appStorage, db } from '../Components/Firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const storageRef = ref(appStorage, `${file.name}`)

        // To upload a file, you must first create a reference to the file
        const uplaodTask = uploadBytesResumable(storageRef, file)
        
        // To add collection in firestore
        const collectionRef = collection(db, 'images')


        uplaodTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )

                setProgress(progress)
            },
            (err) => {
                setError(err)
            },
            async () => {
                await getDownloadURL(uplaodTask.snapshot.ref).then((url) => {
                    const createdAt = serverTimestamp()
                    addDoc(collectionRef, { url, createdAt })
                    setUrl(url)
                })
            }
        )
    }, [file])

    return { url, progress, error }
}

export default useStorage
