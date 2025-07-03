
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

export const useCRM = () => {
  const queryClient = useQueryClient();
  
  const { data: customers, isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('customers')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data;
    }
  });

  const addCustomer = useMutation({
    mutationFn: async (newCustomer: {
      name: string;
      email?: string;
      phone?: string;
      address?: string;
      notes?: string;
    }) => {
      const { data, error } = await supabase
        .from('customers')
        .insert([newCustomer])
        .select()
        .single();
        
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      toast.success('Customer added successfully');
    },
    onError: (error: Error) => {
      toast.error('Failed to add customer: ' + error.message);
    }
  });

  return {
    customers,
    isLoading,
    addCustomer
  };
};
