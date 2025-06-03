import { createContext, useContext, useEffect, useState } from 'react'

import { db } from '../../config/firebaseConfig'
import { collection, onSnapshot } from 'firebase/firestore'

const DataContext = createContext()

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const projectsCollectionRef = collection(db, 'projects')

    const projectsListenerCleanup = onSnapshot(
      projectsCollectionRef,
      (snapshot) => {
        setProjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }
    )

    return () => {
      projectsListenerCleanup()
    }
  }, [])

  const valeu = {
    projects
  }

  return <DataContext.Provider value={valeu}>{children}</DataContext.Provider>
}

export function useData() {
  return useContext(DataContext)
}
