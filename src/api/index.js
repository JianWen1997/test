import ajaxMock from './ajaxMock'



export const reqCategoryList = () =>ajaxMock.get('/category')

export const reqBanner =()=>ajaxMock.get('/banner')

export const reqUser = ()=>ajaxMock.get('/user')

