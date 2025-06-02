import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { db, storage } from '../../config/firebaseConfig'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTheme } from '@/context/ThemeContext'
import Loading from '@/imgs/others/loading.gif'
import { ThemeGlobal } from '@/styles/globalStyles'
import { DarkTheme, LightTheme } from '@/styles/theme'
import { addDoc, collection, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { ThemeProvider } from 'styled-components'

function SignupForm() {
  const { theme } = useTheme()
  const [selectedImage, setSelectedImage] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const form = useForm({
    defaultValues: {
      name: '',
      project_link: '',
      repository_link: '',
      alt: '',
      description: '',
      technologies: '',
      imagem: ''
    }
  })

  async function onSubmit(imgURL) {
    const formData = form.getValues()

    const docData = {
      name: formData.name || '',
      project_link: formData.project_link || '',
      repository_link: formData.repository_link || '',
      alt: formData.alt || '',
      description: formData.description || '',
      technologies: formData.technologies || '',
      imagem: imgURL
    }

    try {
      const collectionRef = collection(db, 'projects')
      await addDoc(collectionRef, docData)
      console.log(formData)

      clearInput()
      setUploading(false)
    } catch (error) {
      console.log(error)
      setUploading(false)
    }
  }

  const handleUpload = () => {
    if (!selectedImage) return alert('Por favor, selecione uma imagem!')
    if (!selectedImage.type.includes('image')) {
      return alert('Só é permitido imagens!')
    }
    if (selectedImage.size > 1024 * 1024 * 2) {
      return alert(
        `A imagem ${selectedImage.name} não pode ser maior que 2MB. Imagem selecionada tem: ${(selectedImage.size / 1024 / 1024).toFixed(3)}MB`
      )
    }

    setUploading(true)

    const imgName = createUniqueFileName(selectedImage.name)
    const storageRef = ref(storage, `projects/${imgName}`)
    const uploadTask = uploadBytesResumable(storageRef, selectedImage)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      (error) => {
        alert(error.message)
        setUploading(false)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          onSubmit(url)
        })
      }
    )
  }

  const createUniqueFileName = (file) => {
    const uniqueId = doc(collection(db, 'images')).id
    return `${uniqueId}-${file}`
  }

  const clearInput = () => {
    form.reset()
    setSelectedImage(null)

    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <ThemeGlobal>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-xl">Cadastrar Informação</h1>
          <Form {...form}>
            <form
              className="relative w-full max-w-md space-y-2"
              onSubmit={form.handleSubmit(handleUpload)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="project_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link do Projeto</FormLabel>
                    <FormControl>
                      <Input required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="repository_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link do Repositório</FormLabel>
                    <FormControl>
                      <Input required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {uploading && (
                <img
                  className="absolute top-[2.75rem] mx-20 h-12 w-12 md:top-[11.25rem] md:mx-[11.5rem] md:h-20 md:w-20"
                  src={Loading}
                  alt="Imagem de carregamento"
                />
              )}

              <FormField
                control={form.control}
                name="imagem"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Imagem</FormLabel>
                    <FormControl>
                      <Input
                        className="pt-1"
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            setSelectedImage(e.target.files[0])
                          }
                        }}
                        {...field}
                        ref={fileInputRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="alt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alt</FormLabel>
                    <FormControl>
                      <Input required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="technologies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tecnologias</FormLabel>
                    <FormControl>
                      <Textarea required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {uploading && (
                <div className="flex flex-col items-center">
                  <div className="mt-2 h-3 w-full rounded-full bg-gray-300">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-gray-600">
                    Uploading... {progress.toFixed(2)}%
                  </p>
                </div>
              )}

              <Button className="mx-[11.15rem]" type="submit">
                Cadastrar
              </Button>
            </form>
          </Form>
          <Button onClick={() => navigate('/')}>Portfólio</Button>
        </div>
      </ThemeGlobal>
    </ThemeProvider>
  )
}

export default SignupForm
