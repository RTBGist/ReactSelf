import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormErorr = (state: StateSchema) => state?.addCommentForm?.error || '';
export const getAddCommentFormText = (state: StateSchema) => state?.addCommentForm?.text || '';
