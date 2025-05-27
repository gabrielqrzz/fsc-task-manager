import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['updateTask', taskId],
    mutationFn: async (newTask) => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: newTask.title.trim(),
          description: newTask.description.trim(),
          time: newTask.time.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error()
      }
      const updatedTask = await response.json()
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
