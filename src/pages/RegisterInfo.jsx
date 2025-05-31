import { collection, doc } from 'firebase/firestore'
import { db, storage } from '../../config/firebaseConfig '

import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

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
import { ThemeProvider } from 'styled-components'
import { ThemeGlobal } from '@/styles/globalStyles'
import { useTheme } from '@/context/ThemeContext'
import { DarkTheme, LightTheme } from '@/styles/theme'
import Loading from '@/imgs/others/loading.gif'

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
      description: '',
      technologies: '',
      image: ''
    }
  })

  function onSubmit(data) {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('project-link', data.project_link)
    formData.append('repository-link', data.repository_link)
    formData.append('description', data.description)
    formData.append('technologies', data.technologies)

    if (selectedImage) formData.append('image', selectedImage)

    clearInput()
  }

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      setSelectedImage(e.target.files[0])
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

    const imgName = createUniqueFileName(selectedImage.name)
    const storageRef = ref(storage, `projects/${imgName}`)
    const uploadTask = uploadBytesResumable(storageRef, selectedImage)

    setUploading(true)

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
          setUploading(false)
          // onSubmit(url)
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
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-xl">Cadastrar Informação</h1>
          <Form {...form}>
            <form
              className="w-full max-w-md space-y-2 relative"
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
                name="project-link"
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
                name="repository-link"
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
                  className="w-12 h-12 mx-20 top-[2.75rem] absolute md:h-20 md:w-20 md:mx-[11.5rem] md:top-[11.25rem]"
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
                          handleImageChange(e)
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
                  <div className="w-full h-3 bg-gray-300 rounded-full mt-2">
                    <div
                      className="h-full bg-blue-500 rounded-full"
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
