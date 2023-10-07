import { useCategoriesQuery } from "@/generated/graphql";

export const useCategories = (parentId?: string) => {
  
  const { data } = useCategoriesQuery({
    variables:{
      condition: {
        parentId : parentId || null
      }
    }
  });

  return {
    categories: data?.categories?.nodes || [],
  }
}