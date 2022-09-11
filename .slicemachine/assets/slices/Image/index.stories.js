import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Nulla ut excepteur ad dolore fugiat ipsum elit reprehenderit laboris nostrud anim duis sint. Irure magna sit commodo excepteur amet Lorem consequat in anim proident excepteur.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Banner = () => <MyComponent slice={{"variation":"banner","name":"Banner","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":3000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=3000&h=1000&fit=crop"}},"id":"_Banner"}} />
_Banner.storyName = 'Banner'

export const _HomeIntro = () => <MyComponent slice={{"variation":"homeIntro","name":"HomeIntro","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Commodo veniam proident ad nisi. Eiusmod culpa enim nostrud excepteur irure eiusmod exercitation culpa id. Ut veniam excepteur cillum non amet eiusmod Lorem laborum commodo.","spans":[]}]},"id":"_HomeIntro"}} />
_HomeIntro.storyName = 'HomeIntro'
