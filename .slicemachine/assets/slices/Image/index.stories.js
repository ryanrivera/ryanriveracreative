import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Dolore et cupidatat adipisicing est ea nisi consequat quis anim cillum dolore ea. Reprehenderit adipisicing amet aliqua dolor commodo proident irure eu.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Banner = () => <MyComponent slice={{"variation":"banner","name":"Banner","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":3000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=3000&h=1000&fit=crop"}},"id":"_Banner"}} />
_Banner.storyName = 'Banner'
