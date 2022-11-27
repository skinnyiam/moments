export default (posts=[],action) => {
      switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

            //on creating the post we will send the data to backend
        case 'CREATE':
            return [...posts,action.payload];
      
        default:
            return posts;
      }
}