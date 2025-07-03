
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

export const useInventory = () => {
  const queryClient = useQueryClient();
  
  const { data: inventory, isLoading } = useQuery({
    queryKey: ['inventory'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('inventory_items')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data;
    }
  });

  const addItem = useMutation({
    mutationFn: async (newItem: any) => {
      const { data, error } = await supabase
        .from('inventory_items')
        .insert([newItem])
        .select()
        .single();
        
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inventory'] });
      toast.success('Item added successfully');
    },
    onError: (error: Error) => {
      toast.error('Failed to add item: ' + error.message);
    }
  });

  return {
    inventory,
    isLoading,
    addItem
  };
};
