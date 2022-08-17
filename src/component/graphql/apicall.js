/** @namespace myFirstApp/Component/Graphql/Apicall/searchIdApi */
export const searchIdApi = (searchId, searchIdData) => {
    const carPlate = `{
    GetCar(id:"${searchId}"){
      carlinkment
      RegNr
      modell_id
      Fordons_ar
      Chassinummer
      Registreringsdatum
      Tillverkningsmanad
      C_merke
      C_typ
      C_modell
      C_kw
      C_hk
      C_slagvolym
      C_lit
      C_hjuldrift
      C_bransle
      C_vaxellada
      C_kaross
      C_motorkod
      C_chassi 
      C_fran_ar 
      C_till_ar 
      Tjanstevikt 
      Totalvikt 
      WHEELID 
      Min_Tum 
      Max_Tum 
      BULTCIRKEL 
      BULTDIMETER 
      NAVHAL 
      ET 
      dack_dim_fram 
      dack_dim_bak 
      Bredd_Fram 
      Bredd_Bak 
      ET_fram_tollerans 
      ET_bak_tollerans 
      DK_Anmarkning 
      car_make
    }
  }`;

    fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: carPlate })
    })
        .then(
            /** @namespace myFirstApp/Component/Graphql/Apicall/searchIdApi/then/catch/then/then/fetch/then */
            (response) => response.json()
        )
        .then(
            /** @namespace myFirstApp/Component/Graphql/Apicall/searchIdApi/then/catch/then/then */
            (data) => {
                // this.setState({ modelId: data.data.GetCar.modell_id });
                console.log('__ak m', data.data.GetCar.modell_id);
                searchIdData(data.data.GetCar.modell_id);
            }
        )
        .catch(
            /** @namespace myFirstApp/Component/Graphql/Apicall/searchIdApi/then/catch */
            (error) => console.log('error', error)
        );
};

/** @namespace myFirstApp/Component/Graphql/Apicall/categoryListDisplay */
export const categoryListDisplay = (categoryListData) => {
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

    fetch('/graphql', {
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
                console.log('__ak', ress);
            }
        )
        .catch(
            /** @namespace myFirstApp/Component/Graphql/Apicall/categoryListDisplay/then/catch */
            (error) => console.log('error', error)
        );
};
