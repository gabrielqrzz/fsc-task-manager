import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LoaderIcon,
  TrashIcon,
} from '../assets/icons'
import Button from '../components/Button'
import Input from '../components/Input'
import InputLabel from '../components/InputLabel'
import Sidebar from '../components/Sidebar'
import TimeSelect from '../components/TimeSelect'
import { useDeleteTask } from '../hooks/data/use-delete-task'
import { useGetTask } from '../hooks/data/use-get-task'
import { useUpdateTask } from '../hooks/data/use-update-task'

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const { mutate: updateTask, isPending: updateTaskIsLoading } =
    useUpdateTask(taskId)

  const { mutate: deleteTask, isPending: deleteTaskIsLoading } =
    useDeleteTask(taskId)
  const { data: task } = useGetTask({
    taskId,
    onSuccess: reset,
  })

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleSaveClick = async (data) => {
    updateTask(data, {
      onSuccess: () => toast.success('Tarefa atualizada com sucesso'),
      onError: () => toast.error('Erro ao atualizar tarefa.'),
    })
  }

  const handleDeleteClick = async () => {
    deleteTask(undefined, {
      onSuccess: () => {
        toast.success('Tarefa deletada com sucesso!'), navigate(-1)
      },
      onError: () => toast.error('Ocorreu um erro ao deletar a tarefa.'),
    })
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-6 px-8 py-16">
        {/* Barra do topo */}
        <div className="flex w-full justify-between">
          {/* parte da esquerda */}
          <div>
            <button
              onClick={handleBackClick}
              className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary"
            >
              <ArrowLeftIcon />
            </button>
            <div className="flex items-center gap-1 text-xs">
              <Link
                to={'/tasks'}
                className="cursor-pointer text-brand-text-gray"
              >
                Minhas tarefas
              </Link>
              <ChevronRightIcon className="text-brand-text-gray" />
              <span className="font-semibold text-brand-primary">
                {task?.title}
              </span>
            </div>

            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>

          {/* parte da direita */}
          <Button
            className="h-fit self-end"
            color="danger"
            onClick={handleDeleteClick}
          >
            {' '}
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>

        <form onSubmit={handleSubmit(handleSaveClick)}>
          {/* dados da tarefa */}
          <div className="space-y-6 rounded-xl bg-brand-white p-6">
            <div>
              <Input
                id="title"
                label="Título"
                {...register('title', {
                  required: 'O título é obrigatório.',
                  validate: (value) => {
                    if (!value.trim()) {
                      return 'O título não pode ser vazio.'
                    }
                    return true
                  },
                })}
                errorMessage={errors?.title?.message}
              ></Input>
            </div>

            <div>
              <TimeSelect
                {...register('time', {
                  required: 'O horário é obrigatório.',
                })}
                errorMessage={errors?.time?.message}
              ></TimeSelect>
            </div>

            <div>
              <Input
                id="description"
                label="Descrição"
                {...register('description', {
                  required: 'A descrição é obrigatória.',
                  validate: (value) => {
                    if (!value.trim()) {
                      return 'A descrição não pode ser vazia.'
                    }
                    return true
                  },
                })}
                errorMessage={errors?.description?.message}
              ></Input>
            </div>
          </div>

          {/* botão de salvar */}
          <div className="flex w-full justify-end gap-3 pt-3">
            <Button
              size="large "
              color="primary"
              disabled={updateTaskIsLoading || deleteTaskIsLoading}
              type="submit"
            >
              {(updateTaskIsLoading || deleteTaskIsLoading) && (
                <LoaderIcon className="animate-spin" />
              )}
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskDetailsPage
