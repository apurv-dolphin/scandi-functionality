/** @namespace myFirstApp/Component/Graphql/Apicall/categoryListDisplay */
export const categoryListDisplay = async (categoryListData) => {
    const categoryList = `{
     categoryList(filters: {ids: {in: ["2"]}}) {
       children_count
       children {
         id
         level
         name
         path
         url_path
         url_key
         image
         description
         children {
           id
           level
           name
           path
           url_path
           url_key
           image
           description
         }
       }
     }
   }`;

    await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: categoryList })
    })
        .then(
            /** @namespace myFirstApp/Component/Graphql/Apicall/categoryListDisplay/then/catch/then/then/fetch/then */
            (response) => response.json()
        )
        .then(
            /** @namespace myFirstApp/Component/Graphql/Apicall/categoryListDisplay/then/catch/then/then */
            (data) => {
                const ress = data.data.categoryList[0].children;
                categoryListData(ress);
            }
        )
        .catch(
            /** @namespace myFirstApp/Component/Graphql/Apicall/categoryListDisplay/then/catch */
            (error) => console.log('error', error)
        );
};
