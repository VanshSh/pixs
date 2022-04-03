import { useState, useEffect } from 'react'
import { db } from '../Components/Firebase/firebase'
import {
    collection,
    orderBy,
    onSnapshot,
    query,
} from 'firebase/firestore'

const useFirestore = (data) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, data)
        const orderedData = query(collectionRef, orderBy('createdAt', 'desc'))

        const unsbscribe = onSnapshot(orderedData, (querySnapshot) => {
            const documents = []
            querySnapshot.forEach((doc) => {
                return documents.push({ ...doc.data(), id: doc.id })
            })
            return setDocs(documents)
        })
        return () => unsbscribe()
    }, [data])
    return {docs}
}

export default useFirestore
