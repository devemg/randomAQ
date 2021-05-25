/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  image: string,
  description: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id?: string,
  name?: string,
  image?: string,
  description?: string,
  questions?: ModelQuestionConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items?:  Array<Question | null > | null,
  nextToken?: string | null,
};

export type Question = {
  __typename: "Question",
  id?: string,
  content?: string,
  answer?: string,
  blog?: Category,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  description?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateQuestionInput = {
  id?: string | null,
  content: string,
  answer: string,
  questionBlogId?: string | null,
};

export type ModelQuestionConditionInput = {
  content?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionInput = {
  id: string,
  content?: string | null,
  answer?: string | null,
  questionBlogId?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  answer?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
};

export type CreateCategoryMutationVariables = {
  input?: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        answer: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input?: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        answer: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input?: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        answer: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input?: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    answer: string,
    blog?:  {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input?: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    answer: string,
    blog?:  {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input?: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    answer: string,
    blog?:  {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id?: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        answer: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id?: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    answer: string,
    blog?:  {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items?:  Array< {
      __typename: "Question",
      id: string,
      content: string,
      answer: string,
      blog?:  {
        __typename: "Category",
        id: string,
        name: string,
        image: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        answer: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        answer: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        content: string,
        answer: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    answer: string,
    blog?:  {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    answer: string,
    blog?:  {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    content: string,
    answer: string,
    blog?:  {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description: string,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
