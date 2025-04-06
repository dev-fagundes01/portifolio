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

function SignupForm() {
  const [selectedImage, setSelectedImage] = useState(null)

  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const form = useForm({
    defaultValues: {
      name: '',
      projectlink: '',
      repositorylink: '',
      description: '',
      technologies: '',
      image: ''
    }
  })

  function onSubmit(data) {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('projectlink', data.projectlink)
    formData.append('repositorylink', data.repositorylink)
    formData.append('description', data.description)
    formData.append('technologies', data.technologies)

    if (selectedImage) formData.append('image', selectedImage)

    console.log(data)
    console.log(Object.fromEntries(formData))

    clearInput()
  }

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      setSelectedImage(e.target.files[0])
    }
  }

  const clearInput = () => {
    form.reset()
    setSelectedImage(null)

    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl">Cadastrar Informação</h1>
      <Form {...form}>
        <form
          className="w-full max-w-md space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
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
            name="projectlink"
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
            name="repositorylink"
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
                      onChange(e.target.value)
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

          <Button className="mx-[11.15rem]" type="submit">
            Cadastrar
          </Button>
        </form>
      </Form>
      <Button onClick={() => navigate('/')}>Portfólio</Button>
    </div>
  )
}

export default SignupForm
