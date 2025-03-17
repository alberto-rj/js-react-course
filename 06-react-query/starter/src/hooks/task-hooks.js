import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { api } from '../utils';

const getQueryKey = () => {
  return ['tasks'];
};

const createQueryKeyObject = () => {
  return { queryKey: getQueryKey() };
};

export const useListTask = () => {
  const { isPending, isError, error, data } = useQuery({
    queryKey: getQueryKey(),
    queryFn: async () => {
      const { data } = await api.get('/');
      return data;
    },
  });

  return {
    isPending,
    isError,
    error,
    data,
  };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (taskTitle) => {
      const newTask = { title: taskTitle };
      return api.post('/', newTask);
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(createQueryKeyObject());
      toast.success('Task added');
    },
  });

  return {
    isPending,
    mutate,
  };
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: ({ id, isDone }) => {
      return api.patch(`/${id}`, { isDone });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries(createQueryKeyObject());
      toast.success(response.data.msg);
    },
  });

  return {
    isPending,
    mutate,
  };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: (taskId) => {
      return api.delete(`/${taskId}`);
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
    onSuccess: (response) => {
      queryClient.invalidateQueries(createQueryKeyObject());
      toast.success(response.data.msg);
    },
  });

  return {
    isPending,
    mutate,
  };
};
