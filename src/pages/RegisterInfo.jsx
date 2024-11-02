import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

function SignupForm() {
  const [selectedImage, setSelectedImage] = useState(null)

  const form = useForm({
    defaultValues: {
      name: "",
      projectlink: "",
      repositorylink: "",
      description: "",
      technologies: "",
      image: "",
    },
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
  }

  const handleImageChange = (e) => {
    if (e.target.files?.[0]) {
      setSelectedImage(e.target.files[0])
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className='text-xl'>Cadastrar Informação</h1>
      <Form {...form}>
        <form className='w-full max-w-md space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input {...field} />
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
                    className='pt-1' type="file"
                    accept="image/*" onChange={(e) => {
                      handleImageChange(e)
                      onChange(e.target.value)
                    }} {...field} />
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
                  <Textarea {...field} />
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
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default SignupForm