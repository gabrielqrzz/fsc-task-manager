import './AddTaskDialog.css'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { CSSTransition } from 'react-transition-group'
import { toast } from 'sonner'
import { v4 } from 'uuid'

import { LoaderIcon } from '../assets/icons'
import Button from './Button'
import Input from './Input'
import InputLabel from './InputLabel'
import TimeSelect from './TimeSelect'

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationKey: 'addTask',
    mutationFn: async (task) => {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
      })
      if (!response.ok) {
        throw new Error()
      }
      return response.json()
    },
  })
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      time: 'morning',
      description: '',
    },
  })

  const nodeRef = useRef()

  const handleSaveClick = async (data) => {
    //chamar a API para salvar essa tarefa
    const task = {
      id: v4(),
      title: data.title.trim(),
      time: data.time.trim(),
      description: data.description.trim(),
      status: 'not_started',
    }
    mutate(task, {
      onSuccess: () => {
        queryClient.setQueryData('tasks', (currentTasks) => {
          return [...currentTasks, task]
        })
        toast.success('Tarefa adicionada com sucesso.')
        handleClose()
        reset({
          title: '',
          time: 'morning',
          description: '',
        })
      },
      onError: () => toast.error('Erro ao adicionar tarefa.'),
    })
  }

  const handleCancelClick = () => {
    reset({
      title: '',
      time: 'morning',
      description: '',
    })
    handleClose()
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            {/* DIALOG */}
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-brand-dark-blue">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-[9A9C9F]">
                Insira as informaçoes abaixo
              </p>

              <form
                onSubmit={handleSubmit(handleSaveClick)}
                className="flex w-[336px] flex-col space-y-4"
              >
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  errorMessage={errors?.title?.message}
                  {...register('title', {
                    required: 'O título é obrigatório.',
                    validate: (value) => {
                      if (!value.trim()) {
                        return 'O título não pode ser vazio.'
                      }
                      return true
                    },
                  })}
                  disabled={isSubmitting}
                />

                <TimeSelect
                  errorMessage={errors?.time?.message}
                  {...register('time', {
                    required: true,
                  })}
                  disabled={isSubmitting}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  errorMessage={errors?.description?.message}
                  {...register('description', {
                    required: 'A descrição é obrigatória.',
                    validate: (value) => {
                      if (!value.trim()) {
                        return 'A descriçãp não pode ser vazia.'
                      }
                      return true
                    },
                  })}
                  disabled={isSubmitting}
                />

                <div className="flex gap-3">
                  <Button
                    size="large"
                    className="w-full"
                    color="secondary"
                    onClick={handleCancelClick}
                    type="button"
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <LoaderIcon className="mr-2 animate-spin" />
                    )}
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default AddTaskDialog
