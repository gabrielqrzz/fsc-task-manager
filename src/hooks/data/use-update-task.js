import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['updateTask', taskId],
    mutationFn: async (newTask) => {
      const { data: updatedTask } = await axios.patch(
        `http://localhost:3000/tasks/${taskId}`,
        {
          title: newTask.title.trim(),
          description: newTask.description.trim(),
          time: newTask.time.trim(),
        }
      )

      queryClient.setQueryData('tasks', (currentTasks) => {
        return currentTasks.map((currentTask) => {
          if (currentTask.id === taskId) {
            return updatedTask
          }
          return currentTask
        })
      })
    },
  })
}
