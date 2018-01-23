import CONSTANTS from '../constants/';

let initialState =  [
  {
    id: Math.floor(Math.random() * 10000).toString(),
    body: '1Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.',
    status: 'new',
    created: new Date().toLocaleDateString(),
    modified: new Date().toLocaleDateString()
  },
  {
    id: Math.floor(Math.random() * 10000).toString(),
    body: '2Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
    status: 'review',
    created: new Date().toLocaleDateString(),
    modified: new Date().toLocaleDateString()
  },
  {
    id: Math.floor(Math.random() * 10000).toString(),
    body: '3Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    status: 'completed',
    created: new Date().toLocaleDateString(),
    modified: new Date().toLocaleDateString()
  },
  {
    id: Math.floor(Math.random() * 10000).toString(),
    body: '4quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    status: 'review',
    created: new Date().toLocaleDateString(),
    modified: new Date().toLocaleDateString()
  },
  {
    id: Math.floor(Math.random() * 10000).toString(),
    body: '5D elit, eget tincidunt nibh pulvinar a. 123',
    status: 'in progress',
    created: new Date().toLocaleDateString(),
    modified: new Date().toLocaleDateString()
  }
];

let a = fetch('/todos')
  .then(function(response) {
    console.log(1)
    console.log(response)
  })
  .then(function(data) {
    console.log(2)
    console.log(data)
  })
  .catch( alert );

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.ADD_TODO:
      return [
        action.payload,
        ...state
      ];

    case CONSTANTS.REMOVE_TODO:
      return state.filter((el) => el.id !== action.id);

    case CONSTANTS.UPDATE_TODO:
      return state.map((todo) => (
        todo.id === action.payload.id
        ? Object.assign(todo, action.payload)
        : todo
      ));

    default:
      return state;
  }
}
