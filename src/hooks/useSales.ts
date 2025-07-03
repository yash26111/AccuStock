
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

export const useSales = () => {
  const queryClient = useQueryClient();
  
  const { data: sales, isLoading } = useQuery({
    queryKey: ['sales'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sales')
        .select('*, inventory_items(name)')
        .order('sale_date', { ascending: false });
        
      if (error) throw error;
      return data;
    }
  });

  const addSale = useMutation({
    mutationFn: async (newSale: any) => {
      const { data, error } = await supabase
        .from('sales')
        .insert([newSale])
        .select()
        .single();
        
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sales'] });
      toast.success('Sale recorded successfully');
    },
    onError: (error: Error) => {
      toast.error('Failed to record sale: ' + error.message);
    }
  });

  return {
    sales,
    isLoading,
    addSale
  };
};
